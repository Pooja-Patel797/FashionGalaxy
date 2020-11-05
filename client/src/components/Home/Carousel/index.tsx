import React, { useState, useEffect } from "react";
import { Box, Typography, Container } from "@material-ui/core";
import { useStyles } from "./style";
import { ImageDetailList } from "../../../common/imagesforcarousel";

let imgUrl: string = ImageDetailList[0].img_url;
let imgkeyword: string = ImageDetailList[0].keyword;

export const Carousel:React.FC = () => {
  const [imgId, setImgId] = useState(0);

  const classes = useStyles();

  const changeImage = () => {
    if (imgId >= ImageDetailList.length) {
      imgUrl = ImageDetailList[0].img_url;
      imgkeyword = ImageDetailList[0].keyword;
      setImgId(() => 1);
    } else {
      imgUrl = ImageDetailList[imgId].img_url;
      imgkeyword = ImageDetailList[imgId].keyword;
      setImgId(() => imgId + 1);
    }
  };
  useEffect(() => {
    const id = setInterval(changeImage, 2000);

    return function cleanup() {
      clearInterval(id);
    };
  });
  return (
    <React.Fragment>
      <Container className={classes.container}>
        <Box className={classes.flexBox}>
          <Box className={classes.content}>
            <Typography className={classes.heading1}>
              Buy branded products on amazing prices !!!
            </Typography>
            <Typography className={classes.keyword}>
              Let's {imgkeyword}
            </Typography>
            <Typography className={classes.heading2}>
              Shop upto 3000 Rs and get upto 30% discount,awesome gifts and
              vouchers...
            </Typography>
          </Box>
          <Box className={classes.imageWrapper}>
            <img className={classes.image} src={imgUrl} alt={imgUrl} />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};
