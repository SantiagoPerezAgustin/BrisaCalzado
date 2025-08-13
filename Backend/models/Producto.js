module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define(
    "Producto",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      descripcion: DataTypes.TEXT,
      imagen: DataTypes.STRING,
      stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
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
