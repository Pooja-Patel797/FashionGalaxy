export default interface Product {
  pid: string;
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
    pid: "0",
    product_name: "BIBA",
    description: "Women Navy Blue & Green Layered  Dress",
    img_url: {
      cardImage:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/5527492/2018/5/7/11525683977921-Navy-Blue--Green-Embroidered-yoke-cape-design-Maxi-2971525683977801-1.jpg",
      gridImage: [
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5527492/2018/5/7/11525683977921-Navy-Blue--Green-Embroidered-yoke-cape-design-Maxi-2971525683977801-1.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5527492/2018/5/7/11525683977904-Navy-Blue--Green-Embroidered-yoke-cape-design-Maxi-2971525683977801-2.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5527492/2018/5/7/11525683977881-Navy-Blue--Green-Embroidered-yoke-cape-design-Maxi-2971525683977801-3.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5527492/2018/5/7/11525683977867-Navy-Blue--Green-Embroidered-yoke-cape-design-Maxi-2971525683977801-4.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5527492/2018/5/7/11525683977938-Navy-Blue--Green-Embroidered-yoke-cape-design-Maxi-2971525683977801-5.jpg",
      ],
      backdropImage: [
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/5527492/2018/5/7/11525683977921-Navy-Blue--Green-Embroidered-yoke-cape-design-Maxi-2971525683977801-1.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/5527492/2018/5/7/11525683977904-Navy-Blue--Green-Embroidered-yoke-cape-design-Maxi-2971525683977801-2.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/5527492/2018/5/7/11525683977881-Navy-Blue--Green-Embroidered-yoke-cape-design-Maxi-2971525683977801-3.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/5527492/2018/5/7/11525683977867-Navy-Blue--Green-Embroidered-yoke-cape-design-Maxi-2971525683977801-4.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/5527492/2018/5/7/11525683977938-Navy-Blue--Green-Embroidered-yoke-cape-design-Maxi-2971525683977801-5.jpg",
      ],
    },
    category: "women",
    price: 1900,
    product_brand: "BIBA",
    product_size: ["Xs", "S", "M", "L", "XL"],
    rating: 3,
  },
  {
    pid: "1",
    product_name: "MAX",
    description: "Denim Jacket",
    img_url: {
      cardImage:
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12310804/2020/8/27/9c21d146-c2fb-4ed5-854f-70d1813b310f1598503861589TopsMANGOWomenTshirtsMANGOMANMenDressesMANGOWomenTshirtsMANG5.jpg",
      gridImage: [
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12310804/2020/8/27/11335ab8-d4e2-4144-9eca-2d9ff132a08d1598503861231TopsMANGOWomenTshirtsMANGOMANMenDressesMANGOWomenTshirtsMANG1.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12310804/2020/8/27/6f7daad6-8d5c-48b7-bed9-ce46ed379c5d1598503861311TopsMANGOWomenTshirtsMANGOMANMenDressesMANGOWomenTshirtsMANG2.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12310804/2020/8/27/179907ac-216b-4c98-8dce-93bb3eb3fd881598503861427TopsMANGOWomenTshirtsMANGOMANMenDressesMANGOWomenTshirtsMANG3.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12310804/2020/8/27/70e233ef-e12a-4a52-84c6-addcfa7409ff1598503861512TopsMANGOWomenTshirtsMANGOMANMenDressesMANGOWomenTshirtsMANG4.jpg",
      ],
      backdropImage: [
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12310804/2020/8/27/11335ab8-d4e2-4144-9eca-2d9ff132a08d1598503861231TopsMANGOWomenTshirtsMANGOMANMenDressesMANGOWomenTshirtsMANG1.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12310804/2020/8/27/6f7daad6-8d5c-48b7-bed9-ce46ed379c5d1598503861311TopsMANGOWomenTshirtsMANGOMANMenDressesMANGOWomenTshirtsMANG2.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12310804/2020/8/27/179907ac-216b-4c98-8dce-93bb3eb3fd881598503861427TopsMANGOWomenTshirtsMANGOMANMenDressesMANGOWomenTshirtsMANG3.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12310804/2020/8/27/70e233ef-e12a-4a52-84c6-addcfa7409ff1598503861512TopsMANGOWomenTshirtsMANGOMANMenDressesMANGOWomenTshirtsMANG4.jpg",
      ],
    },
    category: "men",
    price: 2900,
    product_brand: "SIGNATURE",
    product_size: ["M", "L", "XL"],
    rating: 4,
  },
  {
    pid: "2",
    product_name: "AHIKA",
    description: "Women Green & Off-White Floral Printed Straight Kurta",
    img_url: {
      cardImage:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10808284/2019/10/30/c35d059d-a357-4863-bcb1-eacd8c988fb01572422803188-AHIKA-Women-Kurtas-8841572422802083-1.jpg",
      gridImage: [
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10808284/2019/10/30/c35d059d-a357-4863-bcb1-eacd8c988fb01572422803188-AHIKA-Women-Kurtas-8841572422802083-1.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10808284/2019/10/30/1c956431-a3c3-440f-a5d9-f2b437c705981572422803121-AHIKA-Women-Kurtas-8841572422802083-2.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10808284/2019/10/30/419e1e60-04ad-4948-9dd9-5852cd0eaaa81572422803036-AHIKA-Women-Kurtas-8841572422802083-3.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10808284/2019/10/30/f1668035-f4ee-4d51-9ba6-2b86edbe4d6f1572422802897-AHIKA-Women-Kurtas-8841572422802083-5.jpg",
      ],
      backdropImage: [
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10808284/2019/10/30/c35d059d-a357-4863-bcb1-eacd8c988fb01572422803188-AHIKA-Women-Kurtas-8841572422802083-1.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10808284/2019/10/30/1c956431-a3c3-440f-a5d9-f2b437c705981572422803121-AHIKA-Women-Kurtas-8841572422802083-2.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10808284/2019/10/30/419e1e60-04ad-4948-9dd9-5852cd0eaaa81572422803036-AHIKA-Women-Kurtas-8841572422802083-3.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10808284/2019/10/30/f1668035-f4ee-4d51-9ba6-2b86edbe4d6f1572422802897-AHIKA-Women-Kurtas-8841572422802083-5.jpg",
      ],
    },
    category: "women",
    price: 1200,
    product_brand: "AHIKA",
    product_size: ["S", "M", "L"],
    rating: 5,
  },
  {
    pid: "3",
    product_name: "HRX by Hrithik Roshan",
    description: "Men White & Navy Blue Colourblocked Padded Jacket",
    img_url: {
      cardImage:
        "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/5393444/2018/10/11/e1252e29-d981-406b-87dc-f1906ffcf83b1539254460490-HRX-by-Hrithik-Roshan-Men-Jackets-5691539254459832-4.jpg",
      gridImage: [
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5393444/2018/10/11/b7daceca-84c3-4349-931f-7f17c156cb1d1539254460524-HRX-by-Hrithik-Roshan-Men-Jackets-5691539254459832-1.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5393444/2018/10/11/37ddd440-e364-4d63-937f-24a462b053681539254460513-HRX-by-Hrithik-Roshan-Men-Jackets-5691539254459832-2.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5393444/2018/10/11/f44cf7b8-d76f-4fed-bf2d-64e25c84f9e21539254460501-HRX-by-Hrithik-Roshan-Men-Jackets-5691539254459832-3.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5393444/2018/10/11/e1252e29-d981-406b-87dc-f1906ffcf83b1539254460490-HRX-by-Hrithik-Roshan-Men-Jackets-5691539254459832-4.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5393444/2018/10/11/e3221977-1622-452a-86d3-5c58f9d4f9c21539254460481-HRX-by-Hrithik-Roshan-Men-Jackets-5691539254459832-5.jpg",
      ],
      backdropImage: [
        "https://assets.myntassets.com/h_1440,q_90,w_540/v1/assets/images/5393444/2018/10/11/b7daceca-84c3-4349-931f-7f17c156cb1d1539254460524-HRX-by-Hrithik-Roshan-Men-Jackets-5691539254459832-1.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_540/v1/assets/images/5393444/2018/10/11/37ddd440-e364-4d63-937f-24a462b053681539254460513-HRX-by-Hrithik-Roshan-Men-Jackets-5691539254459832-2.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_540/v1/assets/images/5393444/2018/10/11/f44cf7b8-d76f-4fed-bf2d-64e25c84f9e21539254460501-HRX-by-Hrithik-Roshan-Men-Jackets-5691539254459832-3.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_540/v1/assets/images/5393444/2018/10/11/e1252e29-d981-406b-87dc-f1906ffcf83b1539254460490-HRX-by-Hrithik-Roshan-Men-Jackets-5691539254459832-4.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_540/v1/assets/images/5393444/2018/10/11/e3221977-1622-452a-86d3-5c58f9d4f9c21539254460481-HRX-by-Hrithik-Roshan-Men-Jackets-5691539254459832-5.jpg",
      ],
    },
    category: "men",
    price: 1399,
    product_brand: "PANTALOON",
    product_size: ["S", "M", "L"],
    rating: 3,
  },
  {
    pid: "4",
    product_name: "Roadster",
    description:
      "Men Off-White & Black Colourblocked Round Neck T-shirt with Pocket",
    img_url: {
      cardImage:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11545372/2020/9/5/2f305c83-6024-4dd5-800c-d5e8519708da1599309849885-Roadster-Men-Tshirts-7671599309848388-1.jpg",
      gridImage: [
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11545372/2020/9/5/2f305c83-6024-4dd5-800c-d5e8519708da1599309849885-Roadster-Men-Tshirts-7671599309848388-1.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11545372/2020/9/5/11bf535d-c808-4879-8182-d0712e1d48101599309849829-Roadster-Men-Tshirts-7671599309848388-2.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11545372/2020/9/5/e6f20d7d-e02d-40fd-a04b-57c8364572ee1599309849771-Roadster-Men-Tshirts-7671599309848388-3.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11545372/2020/9/5/15f3e267-e12d-46fb-960b-34a42f2b06451599309849711-Roadster-Men-Tshirts-7671599309848388-4.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11545372/2020/9/5/220c3fdd-7342-4a2d-b419-3a6bc5d197471599309849653-Roadster-Men-Tshirts-7671599309848388-5.jpg",
      ],
      backdropImage: [
        "https://assets.myntassets.com/h_1440,q_90,w_540/v1/assets/images/11545372/2020/9/5/2f305c83-6024-4dd5-800c-d5e8519708da1599309849885-Roadster-Men-Tshirts-7671599309848388-1.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_540/v1/assets/images/11545372/2020/9/5/11bf535d-c808-4879-8182-d0712e1d48101599309849829-Roadster-Men-Tshirts-7671599309848388-2.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_540/v1/assets/images/11545372/2020/9/5/e6f20d7d-e02d-40fd-a04b-57c8364572ee1599309849771-Roadster-Men-Tshirts-7671599309848388-3.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_540/v1/assets/images/11545372/2020/9/5/15f3e267-e12d-46fb-960b-34a42f2b06451599309849711-Roadster-Men-Tshirts-7671599309848388-4.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_540/v1/assets/images/11545372/2020/9/5/220c3fdd-7342-4a2d-b419-3a6bc5d197471599309849653-Roadster-Men-Tshirts-7671599309848388-5.jpg",
      ],
    },
    category: "men",
    price: 479,
    product_brand: "ROADSTER",
    product_size: ["S", "M", "L"],
    rating: 3,
  },
  {
    pid: "5",
    product_name: "StyleStone",
    description: "Girls Multicoloured Striped Basic Jumpsuit",
    img_url: {
      cardImage:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/7/16/72285a45-9393-44d9-8165-62cc653e51c31594856708056-1.jpg",
      gridImage: [
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/productimage/2020/7/16/72285a45-9393-44d9-8165-62cc653e51c31594856708056-1.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/productimage/2020/7/16/6d3cbc61-30d4-498c-a736-2cfe3a681e5b1594856708114-2.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/productimage/2020/7/16/b81e911c-93dd-490b-837c-f7acf5bcf9021594856708162-3.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/productimage/2020/7/16/01edc61a-0dc7-4025-a33b-e7bb75f6c3a41594856708231-4.jpg",
      ],
      backdropImage: [
        "https://assets.myntassets.com/h_1440,q_90,w_540/v1/assets/images/productimage/2020/7/16/72285a45-9393-44d9-8165-62cc653e51c31594856708056-1.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_540/v1/assets/images/productimage/2020/7/16/6d3cbc61-30d4-498c-a736-2cfe3a681e5b1594856708114-2.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_540/v1/assets/images/productimage/2020/7/16/b81e911c-93dd-490b-837c-f7acf5bcf9021594856708162-3.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_540/v1/assets/images/productimage/2020/7/16/01edc61a-0dc7-4025-a33b-e7bb75f6c3a41594856708231-4.jpg",
      ],
    },
    category: "kids",
    price: 1200,
    product_brand: "StyleStone",
    product_size: ["S", "M", "L"],
    rating: 3,
  },
  {
    pid: "6",
    product_name: "SASSAFRAS",
    description: "Women Maroon Solid Basic Jumpsuit",
    img_url: {
      cardImage:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10308671/2019/7/29/4276e20b-9a87-489e-9c49-95b67dc0b6c81564383574672-SASSAFRAS-Women-Jumpsuit-251564383573404-1.jpg",
      gridImage: [
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10308671/2019/7/29/4276e20b-9a87-489e-9c49-95b67dc0b6c81564383574672-SASSAFRAS-Women-Jumpsuit-251564383573404-1.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10308671/2019/7/29/a2442933-3c37-4aa4-856b-f2b5df64f4121564383574634-SASSAFRAS-Women-Jumpsuit-251564383573404-2.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10308671/2019/7/29/f8388a9f-0838-43a5-a023-51c62cf9676c1564383574618-SASSAFRAS-Women-Jumpsuit-251564383573404-3.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10308671/2019/7/29/76cfe818-699b-4613-ae8b-f6da6c055f921564383574601-SASSAFRAS-Women-Jumpsuit-251564383573404-4.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10308671/2019/7/29/4b69ba59-954d-4908-8227-86ba40ffee8e1564383574590-SASSAFRAS-Women-Jumpsuit-251564383573404-5.jpg",
      ],
      backdropImage: [
        "https://assets.myntassets.com/h_1440,q_90,w_540/v1/assets/images/10308671/2019/7/29/4276e20b-9a87-489e-9c49-95b67dc0b6c81564383574672-SASSAFRAS-Women-Jumpsuit-251564383573404-1.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_540/v1/assets/images/10308671/2019/7/29/a2442933-3c37-4aa4-856b-f2b5df64f4121564383574634-SASSAFRAS-Women-Jumpsuit-251564383573404-2.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_540/v1/assets/images/10308671/2019/7/29/f8388a9f-0838-43a5-a023-51c62cf9676c1564383574618-SASSAFRAS-Women-Jumpsuit-251564383573404-3.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_540/v1/assets/images/10308671/2019/7/29/76cfe818-699b-4613-ae8b-f6da6c055f921564383574601-SASSAFRAS-Women-Jumpsuit-251564383573404-4.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_540/v1/assets/images/10308671/2019/7/29/4b69ba59-954d-4908-8227-86ba40ffee8e1564383574590-SASSAFRAS-Women-Jumpsuit-251564383573404-5.jpg",
      ],
    },
    category: "women",
    price: 600,
    product_brand: "SASSAFRAS",
    product_size: ["S", "M", "L"],
    rating: 3,
  },
  {
    pid: "7",
    product_name: "Roadster",
    description:
      "Time Travlr Men Black & Green Regular Fit Checked Casual Shirt",
    img_url: {
      cardImage:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2502999/2018/4/14/11523696815233-Roadster-Men-Black--Green-Regular-Fit-Checked-Casual-Shirt-3931523696814969-1.jpg",
      gridImage: [
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2502999/2018/4/14/11523696815233-Roadster-Men-Black--Green-Regular-Fit-Checked-Casual-Shirt-3931523696814969-1.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2502999/2018/4/14/11523696815208-Roadster-Men-Black--Green-Regular-Fit-Checked-Casual-Shirt-3931523696814969-2.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2502999/2018/4/14/11523696815187-Roadster-Men-Black--Green-Regular-Fit-Checked-Casual-Shirt-3931523696814969-3.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2502999/2018/4/14/11523696815163-Roadster-Men-Black--Green-Regular-Fit-Checked-Casual-Shirt-3931523696814969-4.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2502999/2018/4/14/11523696815144-Roadster-Men-Black--Green-Regular-Fit-Checked-Casual-Shirt-3931523696814969-5.jpg",
      ],
      backdropImage: [
        "https://assets.myntassets.com/h_1440,q_90,w_540/v1/assets/images/2502999/2018/4/14/11523696815233-Roadster-Men-Black--Green-Regular-Fit-Checked-Casual-Shirt-3931523696814969-1.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_540/v1/assets/images/2502999/2018/4/14/11523696815208-Roadster-Men-Black--Green-Regular-Fit-Checked-Casual-Shirt-3931523696814969-2.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_540/v1/assets/images/2502999/2018/4/14/11523696815187-Roadster-Men-Black--Green-Regular-Fit-Checked-Casual-Shirt-3931523696814969-3.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_540/v1/assets/images/2502999/2018/4/14/11523696815163-Roadster-Men-Black--Green-Regular-Fit-Checked-Casual-Shirt-3931523696814969-4.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_540/v1/assets/images/2502999/2018/4/14/11523696815144-Roadster-Men-Black--Green-Regular-Fit-Checked-Casual-Shirt-3931523696814969-5.jpg",
      ],
    },
    category: "kids",
    price: 1200,
    product_brand: "PANTALOON",
    product_size: ["S", "M", "L"],
    rating: 3,
  },
];
