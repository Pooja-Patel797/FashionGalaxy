export default interface Product {
  pid: number;
  product_name: string;
  description: string;
  img_url: any;
  category: String;
  price: number;
  product_brand: string;
  product_size: string[];
  rating: number;
}

export const ProductDetailList: Array<Product> = [
  {
    pid: 1,
    product_name: "Product-name1",
    description: "This is the product 1",
    img_url: [
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10453456/2019/10/19/d3948f4f-75e8-4420-84e9-76cb788397cb1571465887298-Biba-Women-Red--Off-White-Printed-Kurta-with-Skirt--Dupatta--1.jpg",
      "",
      "",
      "",
      "",
    ],
    category: "women",
    price: 1900,
    product_brand: "BIBA",
    product_size: ["Xs", "S", "M", "L", "XL"],
    rating: 3,
  },
  {
    pid: 2,
    product_name: "Product-name2",
    description: "This is the product 2",
    img_url: [
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12310804/2020/8/27/9c21d146-c2fb-4ed5-854f-70d1813b310f1598503861589TopsMANGOWomenTshirtsMANGOMANMenDressesMANGOWomenTshirtsMANG5.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12310804/2020/8/27/11335ab8-d4e2-4144-9eca-2d9ff132a08d1598503861231TopsMANGOWomenTshirtsMANGOMANMenDressesMANGOWomenTshirtsMANG1.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12310804/2020/8/27/6f7daad6-8d5c-48b7-bed9-ce46ed379c5d1598503861311TopsMANGOWomenTshirtsMANGOMANMenDressesMANGOWomenTshirtsMANG2.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12310804/2020/8/27/179907ac-216b-4c98-8dce-93bb3eb3fd881598503861427TopsMANGOWomenTshirtsMANGOMANMenDressesMANGOWomenTshirtsMANG3.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12310804/2020/8/27/70e233ef-e12a-4a52-84c6-addcfa7409ff1598503861512TopsMANGOWomenTshirtsMANGOMANMenDressesMANGOWomenTshirtsMANG4.jpg",
    ],
    category: "men",
    price: 2900,
    product_brand: "SIGNATURE",
    product_size: ["M", "L", "XL"],
    rating: 4,
  },
  {
    pid: 3,
    product_name: "Product-name3",
    description: "This is the product 3",
    img_url: [
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10453456/2019/10/19/d3948f4f-75e8-4420-84e9-76cb788397cb1571465887298-Biba-Women-Red--Off-White-Printed-Kurta-with-Skirt--Dupatta--1.jpg",
      "",
      "",
      "",
      "",
    ],
    category: "kids",
    price: 1200,
    product_brand: "PANTALOON",
    product_size: ["S", "M", "L"],
    rating: 5,
  },
  {
    pid: 4,
    product_name: "Product-name3",
    description: "This is the product 3",
    img_url: [
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10453456/2019/10/19/d3948f4f-75e8-4420-84e9-76cb788397cb1571465887298-Biba-Women-Red--Off-White-Printed-Kurta-with-Skirt--Dupatta--1.jpg",
      "",
      "",
      "",
      "",
    ],
    category: "kids",
    price: 1200,
    product_brand: "PANTALOON",
    product_size: ["S", "M", "L"],
    rating: 3,
  },
  {
    pid: 5,
    product_name: "Product-name3",
    description: "This is the product 3",
    img_url: [
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10453456/2019/10/19/d3948f4f-75e8-4420-84e9-76cb788397cb1571465887298-Biba-Women-Red--Off-White-Printed-Kurta-with-Skirt--Dupatta--1.jpg",
      "",
      "",
      "",
      "",
    ],
    category: "kids",
    price: 1200,
    product_brand: "PANTALOON",
    product_size: ["S", "M", "L"],
    rating: 3,
  },
  {
    pid: 6,
    product_name: "Product-name3",
    description: "This is the product 3",
    img_url: [
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10453456/2019/10/19/d3948f4f-75e8-4420-84e9-76cb788397cb1571465887298-Biba-Women-Red--Off-White-Printed-Kurta-with-Skirt--Dupatta--1.jpg",
      "",
      "",
      "",
      "",
    ],
    category: "kids",
    price: 1200,
    product_brand: "PANTALOON",
    product_size: ["S", "M", "L"],
    rating: 3,
  },
  {
    pid: 7,
    product_name: "Product-name3",
    description: "This is the product 3",
    img_url: [
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10453456/2019/10/19/d3948f4f-75e8-4420-84e9-76cb788397cb1571465887298-Biba-Women-Red--Off-White-Printed-Kurta-with-Skirt--Dupatta--1.jpg",
      "",
      "",
      "",
      "",
    ],
    category: "kids",
    price: 1200,
    product_brand: "PANTALOON",
    product_size: ["S", "M", "L"],
    rating: 3,
  },
  {
    pid: 8,
    product_name: "Product-name3",
    description: "This is the product 3",
    img_url: [
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10453456/2019/10/19/d3948f4f-75e8-4420-84e9-76cb788397cb1571465887298-Biba-Women-Red--Off-White-Printed-Kurta-with-Skirt--Dupatta--1.jpg",
      "",
      "",
      "",
      "",
    ],
    category: "kids",
    price: 1200,
    product_brand: "PANTALOON",
    product_size: ["S", "M", "L"],
    rating: 3,
  },
];
