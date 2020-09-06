import { DataTypes, DATEONLY } from "sequelize";

export const SupplierModel = (sequelize: any, Sequelize: any) => {
  const Supplier = sequelize.define("suppliers", {
    SupplierId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    SupplierName: {
      type: DataTypes.STRING(20),
    },
    State: {
      type: DataTypes.STRING(15),
    },
    City: {
      type: DataTypes.STRING(15),
    },
    Residence: {
      type: DataTypes.STRING(15),
    },
    MobileNumber: {
      type: DataTypes.STRING(10),
    },
    Email: {
      type: DataTypes.STRING(20),
    },

    DateOfSupply: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
  });

  return Supplier;
};
