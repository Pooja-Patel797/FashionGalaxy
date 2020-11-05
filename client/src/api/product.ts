import axios from "axios";

export default interface IProduct {
  _id: string;
  title: string;
  description: string;
  imageUrl: {
    cardImage: string;
    gridImage: Array<string>;
    backdropImage: Array<string>;
  };
  category: string;
  price: number;
  brand: string;
  size: string[];
  rating: number;
  discount: number;
  offers: string;
  quantity: number;
}

export const getAllProducts = async (): Promise<Array<IProduct>> => {
  const result = await axios.get(`http://localhost:8000/products`);
  return result.data;
};

export const getProducts = async (data: string): Promise<Array<IProduct>> => {
  console.log(data);
  const result = await axios.get(`http://localhost:8000/products/list/` + data);
  return result.data;
};

export const getProduct = async (id: string): Promise<IProduct> => {
  const result = await axios.get(`http://localhost:8000/products/` + id);
  console.log("Product id" + id);
  console.log(result);
  return result.data[0];
};
