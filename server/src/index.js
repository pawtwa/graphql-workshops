// require('dotenv').config();

const { ApolloServer, AuthenticationError } = require("apollo-server");
const isEmail = require("isemail");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const RestaurantAPI = require("./datasources/restaurant.api");
const CategoryAPI = require("./datasources/category.api");

const { generateUserModel } = require("./models/user");

// set up any dataSources our resolvers need
const dataSources = () => ({
  restaurantAPI: new RestaurantAPI(),
  categoryAPI: new CategoryAPI()
});

// the function that sets up the global context for each resolver, using the req
// const context = async ({ req }) => {
//   return {
//     authorization: req.headers.authorization,
//     user: users.me,
//     models: {
//       User: users
//     }
//   };
// };
const context = async ({ req }) => {
  // const users = generateUserModel({ req });
  return {};
};

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context,
  engine: {
    apiKey: process.env.ENGINE_API_KEY
  }
});

// Start our server if we're not in a test env.
// if we're in a test env, we'll manually start it in a test
if (process.env.NODE_ENV !== "test")
  server
    .listen({ port: 4000 })
    .then(({ url }) => console.log(`🚀 app running at ${url}`));

// export all the important pieces for integration/e2e tests to use
module.exports = {
  dataSources,
  context,
  typeDefs,
  resolvers,
  ApolloServer,
  server
};
