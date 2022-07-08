const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
//la ID que sea de tipo UUID para generar un numero random con letras y numeros y no se pisen o sobreescriba 
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogames', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    releaseDate: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.NOW,
    },
    rating: {
      type: DataTypes.STRING,
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    createDb: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    background_image: {
      type: DataTypes.STRING,
    },
  }, {
    timestamps: false
  });
};
