let typesense = require("typesense");
let props_rent = require("./data_10K_rent.json");
let props_sale = require("./data_10K_sale.json");

async function index_documents() {
  const client = new typesense.Client({
    nodes: [
      {
        host: "localhost",
        port: "8109",
        protocol: "http",
      },
    ],
    apiKey: "xyz",
  });
  let data = props_rent.slice(0, 100);
  for (let i = 1; i < 100; ++i) {
    await client
      .collections("rent")
      .documents()
      .import(data, { batch_size: 100 });
    data = props_rent.slice(i * 100, i * 100 + 100);
  }
  await client
    .collections("rent")
    .documents()
    .import(props_rent.slice(9900, 10000), { batch_size: 100 });
  let result = await client.collections("rent").retrieve();
  console.log(result);
  data = props_sale.slice(0, 100);
  for (let i = 1; i < 100; ++i) {
    await client
      .collections("sale")
      .documents()
      .import(data, { batch_size: 100 });
    data = props_sale.slice(i * 100, i * 100 + 100);
  }
  await client
    .collections("sale")
    .documents()
    .import(props_sale.slice(9900, 10000), { batch_size: 100 });
  result = await client.collections("sale").retrieve();
  console.log(result);
}

index_documents();

async function test_geosearch() {
  const client = new typesense.Client({
    nodes: [
      {
        host: "0.0.0.0",
        port: "8109",
        protocol: "http",
      },
    ],
    apiKey: "xyz",
  });
  let searchParams = {
    q: "*",
    query_by: "name",
    facet_by: "city_facet, state_facet, new_facet, price_facet",
    // filter_by: "location:(13.0836939, 80.270186, 5 km)",
    // sort_by: "location(13.0836939, 80.270186):asc",
    per_page: 1,
  };
  let result = await client
    .collections("property")
    .documents()
    .search(searchParams);
  console.log(JSON.stringify(result, null, 2));
}

// test_geosearch();
