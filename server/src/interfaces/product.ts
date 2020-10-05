import { Document } from "mongoose";

type imageUrl = {
  cardImage: string;
  gridImage: object;
  backdropImage: object;
};

export interface IProduct extends Document {
  title: string;
  description: string;
  brand: string;
  price: number;
  quantity: number;
  discount: number;
  offers: string;
  rating: number;
  size: Array<string>;
  category: string;
  imageUrl: Array<any>;

  dateOfCreation: Date;
  dateOfModification: Date;
}

// pid: "0",
// product_name: "BIBA",
// description: "Women Navy Blue & Green Layered  Dress",
// img_url: {
//   cardImage:
//     "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/5527492/2018/5/7/11525683977921-Navy-Blue--Green-Embroidered-yoke-cape-design-Maxi-2971525683977801-1.jpg",
//   gridImage: [
//     "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5527492/2018/5/7/11525683977921-Navy-Blue--Green-Embroidered-yoke-cape-design-Maxi-2971525683977801-1.jpg",
//     "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5527492/2018/5/7/11525683977904-Navy-Blue--Green-Embroidered-yoke-cape-design-Maxi-2971525683977801-2.jpg",
//     "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5527492/2018/5/7/11525683977881-Navy-Blue--Green-Embroidered-yoke-cape-design-Maxi-2971525683977801-3.jpg",
//     "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5527492/2018/5/7/11525683977867-Navy-Blue--Green-Embroidered-yoke-cape-design-Maxi-2971525683977801-4.jpg",
//     "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/5527492/2018/5/7/11525683977938-Navy-Blue--Green-Embroidered-yoke-cape-design-Maxi-2971525683977801-5.jpg",
//   ],
//   backdropImage: [
//     "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/5527492/2018/5/7/11525683977921-Navy-Blue--Green-Embroidered-yoke-cape-design-Maxi-2971525683977801-1.jpg",
//     "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/5527492/2018/5/7/11525683977904-Navy-Blue--Green-Embroidered-yoke-cape-design-Maxi-2971525683977801-2.jpg",
//     "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/5527492/2018/5/7/11525683977881-Navy-Blue--Green-Embroidered-yoke-cape-design-Maxi-2971525683977801-3.jpg",
//     "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/5527492/2018/5/7/11525683977867-Navy-Blue--Green-Embroidered-yoke-cape-design-Maxi-2971525683977801-4.jpg",
//     "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/5527492/2018/5/7/11525683977938-Navy-Blue--Green-Embroidered-yoke-cape-design-Maxi-2971525683977801-5.jpg",
//   ],
// },
// category: "women",
// price: 1900,
// product_brand: "BIBA",
// product_size: ["Xs", "S", "M", "L", "XL"],
// rating: 3,
