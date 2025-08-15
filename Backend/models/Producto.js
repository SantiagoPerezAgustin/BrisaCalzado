module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define(
    "Producto",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      precio: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      categoriaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Categorias",
          key: "id",
        },
      },
    },
    {
      tableName: "Productos",
      freezeTableName: true,
    }
  );

  Producto.associate = (models) => {
    Producto.belongsTo(models.Categoria, {
      foreignKey: "categoriaId",
      as: "categoria",
    });
  };

  return Producto;
};
