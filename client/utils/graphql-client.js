const client = require('graphql-client')({
  url: process.env.GRAPHQLENDPOINT,
});

export default client;
