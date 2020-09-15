import { DataTypes } from "sequelize";

export const UsersModel = (sequelize: any, Sequelize: any) => {
  const Users = sequelize.define("users", {
    userId: {
      type: DataTypes.UUID,

      primaryKey: true,
    },
    roleRoleId: {
      type: DataTypes.INTEGER,
    },

    name: {
      type: DataTypes.STRING(20),
    },
    email: {
      type: DataTypes.STRING(30),
    },
    password: {
      type: DataTypes.STRING(20),
    },

    isStatus: {
      type: DataTypes.STRING(10),
    },
  });

  return Users;
};
