module.exports = `
type Order {
    id: String!
    client: String!,
    product: String!,
    quantity: Int!
}

type Query {
  order(product: String!): Order
  allOrders: [Order]
}

type Mutation {

  createOrder(
      client: String!,
      product: String!,
      quantity: Int!
  ): Order

  updateOrder(
    id: ID!,
    client: String,
    product: String,
    quantity: Int
  ): Order

  deleteOrder(id: ID!): Order

}


type Schema {
  query: Query
  mutation: Mutation
}
`;