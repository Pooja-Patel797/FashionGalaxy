import { connection } from "../config/db.connection";

const get_all_products = "Select * from product";
let get_product = "Select * from product where productId=?";

let result1 = [] as Object[];

export const GetAllProductsModel = async () => {
  let result = [] as Object[];
  await connection.query(get_all_products, (err: any, data: any) => {
    if (err) {
      result = err;
    } else {
      result = data;
    }
  });
  return result;
};

export const GetProductModel = (id: any) => {
  connection.query(get_product, id, (err: any, data: any) => {
    if (err) {
      result1 = err;
    } else {
      console.log("From model");
      console.log(data);
      result1 = data;
    }
  }),
    () => {
      return result1;
    };
};
