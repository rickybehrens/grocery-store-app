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

  type Query {
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addItem(itemname: String!): ItemResponse  # Update this line to include the mutation
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
