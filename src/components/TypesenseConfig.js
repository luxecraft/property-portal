import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: 'xyz',
    nodes: [
      {
        host: 'server.harisaran.live',
        port: '443',
        protocol: 'https',
      },
    ],
  },
  additionalSearchParameters: {
    queryBy: 'city_facet, state_facet, street_name, project_name, builder_name',
    queryByWeights: '2,1,2,1,1',
    dropTokensThreshold: 2,
    typoTokensThreshold: 2,
    useServerSideSearchCache: true,
    numTypos: 1,
  },
  geoLocationField: 'location',
});

const searchClient = typesenseInstantsearchAdapter.searchClient;

export default searchClient;
