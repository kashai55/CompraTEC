// uuid for unique ID's
const uuid = require("uuid/v4");
const { Order } = require("../db/db");

const resolvers = {
  //Resolve Query
  Query: {
    async allOrders() {
      return await Order.findAll();
    },
    async order(_, { product }) {
      return await Order.findOne({ where: { product: product } });
    }
  },
  //Resolve Mutation
  Mutation: {
    async createOrder(_, { client, product, quantity }) {
      const order = await Order.create({
        id: uuid(),
        client,
        product,
        quantity
      });
      return order;
    },
    async updateOrder(_, { id, product, client, quantity }) {
      await Order.update(
        { product: product, client: client, quantity: quantity },
        { where: { id } }
      );
      return await Order.findOne({ where: { id: id } });
    },
    async deleteOrder(_, { id }) {
      const order = await Order.destroy({ where: { id: id } });
      return null;
    }
  }
};

module.exports = resolvers;
