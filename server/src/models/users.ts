import { DataTypes } from "sequelize";

export const UsersModel = (sequelize: any) => {
  const Users = sequelize.define("users", {
    userId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    categoryName: {
      type: DataTypes.STRING(6),
    },
  });

  return Users;
};
