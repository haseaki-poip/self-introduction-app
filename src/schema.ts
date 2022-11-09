import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Introduction {
    id: Int!
    name: String!
    affiliation: String!
    introduction: String!
    hobby: String!
    img_url: String
    twitter_url: String
    Instagram_url: String
    github_url: String
    lng: Float!
    lat: Float!
  }

  type Query {
    Introduction(id: Int!): Introduction!
    Introductions(lng: Float!, lat: Float!): [Introduction]!
  }

  input AddIntroductionInput {
    name: String!
    affiliation: String!
    introduction: String!
    hobby: String!
    img_url: String
    twitter_url: String
    Instagram_url: String
    github_url: String
    lng: Float!
    lat: Float!
  }

  type Mutation {
    addIntroduction(input: AddIntroductionInput!): Introduction!
  }
`;
