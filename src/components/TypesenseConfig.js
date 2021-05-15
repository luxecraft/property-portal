import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: 'xyz',
    nodes: [
      {
        host: 'localhost',
        port: '8109',
        protocol: 'http',
      },
    ],
  },
  additionalSearchParameters: {
    queryBy: 'city_facet, street_name, project_name',
    queryByWeights: '2,1,1',
    dropTokensThreshold: 2,
    typoTokensThreshold: 2,
    useServerSideSearchCache: true,
    numTypos: 1,
  },
  geoLocationField: 'location',
});

const searchClient = typesenseInstantsearchAdapter.searchClient;

export default searchClient;
