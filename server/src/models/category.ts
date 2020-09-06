import { DataTypes } from "sequelize";

export const CategoryModel = (sequelize: any) => {
  const Category = sequelize.define("category", {
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },

    categoryName: {
      type: DataTypes.STRING(6),
    },
  });
  return Category;
};
