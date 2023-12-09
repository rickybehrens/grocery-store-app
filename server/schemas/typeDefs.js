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

  type Coordinates {
    type: String
    coordinates: [Float]
  }

  type LocationProperties {
    country: String
    locality: String
    borough: String
    # Add other properties as needed
  }

  type Location {
    id: ID
    name: String
    coordinates: Coordinates
    properties: LocationProperties
  }

  type Query {
    users: [User]
    user(username: String!): User
    products(lat: Float!, long: Float!): [Location]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addItem(itemname: String!): ItemResponse  # Update this line to include the mutation
    updateProducts(lat: Float!, long: Float!): [Location]  # Define the mutation in the schema
  }

  type Item {
    _id: ID
    itemname: String
  }

  type ItemResponse {
    Item: Item
  }
`;

module.exports = typeDefs;
