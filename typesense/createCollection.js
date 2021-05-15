let typesense = require("typesense");

async function create_collection() {
  let rent_schema = {
    name: "rent",
    fields: [
      { name: ".*", type: "auto" },
      { name: "location", type: "geopoint" },
      { name: "bhk_facet", type: "int32", optional: true, facet: true },
      { name: "city_facet", type: "string", optional: true, facet: true },
      { name: "state_facet", type: "string", optional: true, facet: true },
      { name: "type_facet", type: "string", optional: true, facet: true },
      { name: "new_facet", type: "bool", optional: true, facet: true },
      { name: "gated_community", type: "bool", optional: true, facet: true },
      { name: "price", type: "int64", optional: true, facet: true },
      {
        name: "amenities_extra_facet",
        type: "string[]",
        optional: true,
        facet: true,
      },
      {
        name: "amenities_facet",
        type: "string[]",
        optional: true,
        facet: true,
      },
      { name: "sqrft", type: "int64", optional: true, facet: true },
    ],
  };
  let sale_schema = {
    name: "sale",
    fields: [
      { name: ".*", type: "auto" },
      { name: "location", type: "geopoint" },
      { name: "bhk_facet", type: "int32", optional: true, facet: true },
      { name: "city_facet", type: "string", optional: true, facet: true },
      { name: "state_facet", type: "string", optional: true, facet: true },
      { name: "type_facet", type: "string", optional: true, facet: true },
      { name: "new_facet", type: "bool", optional: true, facet: true },
      { name: "gated_community", type: "bool", optional: true, facet: true },
      {
        name: "construction_status",
        type: "bool",
        optional: true,
        facet: true,
      },
      {
        name: "date_of_completion",
        type: "string",
        optional: true,
        facet: true,
      },
      { name: "price", type: "int64", optional: true, facet: true },
      { name: "rate_per_sqrft", type: "int64", optional: true },
      {
        name: "amenities_extra_facet",
        type: "string[]",
        optional: true,
        facet: true,
      },
      {
        name: "amenities_facet",
        type: "string[]",
        optional: true,
        facet: true,
      },
      { name: "sqrft", type: "int64", optional: true, facet: true },
    ],
  };
  const client = new typesense.Client({
    nodes: [
      {
        host: "13.233.100.22",
        port: "8109",
        protocol: "http",
      },
    ],
    apiKey: "xyz",
  });
  let result = await client.collections().create(rent_schema);
  console.log(result);
  result = await client.collections().create(sale_schema);
  console.log(result);
  // let result = await client.collections("rent").retrieve();
  // console.log(JSON.stringify(result, null, 2));
}

create_collection();
