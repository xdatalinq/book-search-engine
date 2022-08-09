import { gql } from '@apollo/client';

export const LOGIN_USER = gql


export const ADD_USER = gql


export const SAVE_BOOK = gql
mutation {
    addPost(title: "GraphQL Tutorial", body: "Let's learn GraphQL by first installing...") {
      _id
      title
      body
    }
  }

export const REMOVE_BOOK = gql    
    

