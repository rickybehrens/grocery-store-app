const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Product {
    id: ID
    name: String
    lat: Float!
    long: Float!
  }

  type Query {
    users: [User]
    user(username: String!): User
    products(lat: Float!, long: Float!): [Product]  # Add lat and long arguments here
}


  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateProducts(lat: Float!, long: Float!): [Product]  # Define the mutation in the schema
  }
`;

module.exports = typeDefs;
