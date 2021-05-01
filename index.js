const express = require("express");
require("dotenv").config();
const db = require("./config/mongoose");
const { ApolloServer, gql } = require("apollo-server-express");
const { typeDefs } = require("./graphql-schema/TypeDefs");
const { resolvers } = require("./graphql-schema/Resolvers");
const PORT = process.env.PORT || 8081;

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log("Server is up and running at port", PORT);
});
