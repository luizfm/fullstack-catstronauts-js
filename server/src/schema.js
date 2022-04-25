const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    tracksForHome: [Track!]!
  }

  "Tracks are the content modules rendered on the first view"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  "Authors are the personal that created tracks"
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`

module.exports  = typeDefs