export default interface Image {
  id: number;
  img_url: string;
  description: string;
  keyword: string;
}

export const ImageDetailList: Array<Image> = [
  {
    id: 1,
    img_url:
      "https://www.carolinsoldo.com/wp-content/uploads/2019/10/home-top-03.jpg",
    description: "This is demo img1 ",
    keyword: "Look",
  },
  {
    id: 2,
    img_url:
      "https://www.carolinsoldo.com/wp-content/uploads/2019/10/home-top-02.jpg",
    description: " This is demo img2",
    keyword: "Choose",
  },
  {
    id: 3,
    img_url:
      "https://www.carolinsoldo.com/wp-content/uploads/2019/10/home-top-04.jpg",
    description: "This is demo img3 ",
    keyword: "Buy",
  },
];
