const { gql } = require("apollo-server-express");
const GraphQlDate = require("graphql-date");

const typeDefs = gql`
  scalar GraphQlDate
  #Types
  type Task {
    _id: ID!
    taskDesc: String!
    createdAt: GraphQlDate
  }

  #Query
  type Query {
    allTasks: [Task!]!
  }

  #Mutation
  type Mutation {
    createTask(taskDesc: String!): Task!
    deleteTask(_id: ID!): Task!
  }
`;
module.exports = { typeDefs };
