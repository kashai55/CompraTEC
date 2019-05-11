const Sequelize = require("sequelize");

////Connect db
const sequelize = new Sequelize(
  "postgres://jkjbpcqb:ly9BvxbHWMMGitJbosJy8ODy4eqJa2Zh@isilo.db.elephantsql.com:5432/jkjbpcqb"
);

// Table model
const Order = sequelize.define(
  "order",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      unique: true
    },
    client: {
      type: Sequelize.STRING
    },
    product: {
      type: Sequelize.STRING
    },
    quantity: {
      type: Sequelize.INTEGER
    }
  },
  {
    timestamps: false
  },
  {
    indexes: [
      {
        unique: true,
        fields: ["id"]
      }
    ]
  }
);

// Export connection and model
module.exports = {
  db: sequelize,
  Order
};
