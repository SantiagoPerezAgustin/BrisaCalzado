const { Sequelize } = require("sequelize");
const path = require("path");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "../database.sqlite"),
  logging: false,
});

const models = {
  Producto: require("./Producto")(sequelize, Sequelize.DataTypes),
  Categoria: require("./Categoria")(sequelize, Sequelize.DataTypes),
};

Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

module.exports = { sequelize, ...models };
