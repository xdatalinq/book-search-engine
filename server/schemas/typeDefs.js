const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: String!
    authors: [String]
    title: String!
    description: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    saveBook(input: bookinput): User
    removeBook(bookId: ID!): User
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth  
  }
  
  input InputBook {
    bookId: String
    authors: [String]
    title: String!
    description: String!
    image: String
    link: String
  }
`;

module.exports = typeDefs;
