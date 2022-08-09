import { gql } from '@apollo/client';

export const LOGIN_USER = gql `
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
      username
      email
    }
  }
`
export const ADD_USER = gql `
mutation {
    addUser(username:"tester", password:"test12345", email:"test@test.com") {
      _id
      username
      email
    }
  }
`
export const SAVE_BOOK = gql `
mutation addReaction($thoughtId: ID!, $reactionBody: String!) {
    addReaction(thoughtId: $thoughtId, reactionBody: $reactionBody) {
      _id
      reactionCount
      reactions {
        _id
        reactionBody
        createdAt
        username
      }
    }
  }
`
export const REMOVE_BOOK = gql `   
mutation addReaction($thoughtId: ID!, $reactionBody: String!) {
    addReaction(thoughtId: $thoughtId, reactionBody: $reactionBody) {
      _id
      reactionCount
      reactions {
        _id
        reactionBody
        createdAt
        username
      }
    }
  }    
`
