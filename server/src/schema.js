const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    me: User
    restaurants(category: ID): [Restaurant]!
    restaurant(id: ID!): Restaurant
    categories: [Category]!
    category(id: ID!): Category
    reviews: [Review]!
    review(id: ID!): Review
  
  }

  type User {
    id: ID!
    email: String
    username: String
    picture: String
  }

  type Category {
    id: ID!
    name: String
    restaurants: [CategoryRestaurant]
  }

  type Restaurant {
    id: ID!
    name: String
    description: String
    address: String
    website: String
    avatar: String
    category: Category
    reviews: [Review]!
  }

  type CategoryRestaurant {
    id: ID!
    name: String
    category: String
  }

  type Review {
    id: ID!
    content: String
    note: Int
    author: User
  }
`;

module.exports = typeDefs;
