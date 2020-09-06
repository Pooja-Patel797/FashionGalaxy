import { DataTypes } from "sequelize";

export const ProductModel = (sequelize: any) => {
  const Product = sequelize.define(
    "products",
    {
      productId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      productName: {
        type: DataTypes.STRING(20),
      },
      productDesc: {
        type: DataTypes.STRING(250),
      },
      productBrand: {
        type: DataTypes.STRING(15),
      },
      productPrice: {
        type: DataTypes.INTEGER,
      },
      productQuantity: {
        type: DataTypes.INTEGER,
      },
      discount: {
        type: DataTypes.INTEGER,
      },
      productOffers: {
        type: DataTypes.STRING(250),
      },
      productImagePath: {
        type: DataTypes.STRING(50),
      },
      productRating: {
        type: DataTypes.INTEGER,
      },
      productSize: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );

  return Product;
};
