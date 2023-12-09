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
    jawgTiles(z: Int!, x: Int!, y: Int!): String  # New type for Jawg API
    products: [Product]
    items: [Item]
}

type Product {
    id: ID
    name: String
}

type Item {
    id: ID
    itemname: String
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addItem(itemname: String!): Item
}
`;

module.exports = typeDefs;