import { Sequelize } from "sequelize";
import { dbConfig } from "../config/db.connection";
import { CategoryModel } from "./category";
import { RoleModel } from "./role";
import { UsersModel } from "./users";
import { ProductModel } from "./product";
import { SupplierModel } from "./Supplier";

export const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: "mysql",

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);
sequelize.sync({ force: false }).then(() => {
  console.log(`Database & tables created here!`);
});
export const Category = CategoryModel(sequelize);
export const Role = RoleModel(sequelize);
export const Users = UsersModel(sequelize);
export const Product = ProductModel(sequelize);
export const Supplier = SupplierModel(sequelize, Sequelize);
Role.hasMany(Users);
Users.belongsTo(Role);

Supplier.hasMany(Product);
Product.belongsTo(Supplier);