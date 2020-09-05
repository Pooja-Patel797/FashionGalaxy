import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  gridList: {
    [theme.breakpoints.between(0, 599)]: {
      display: "flex",
      flexDirection: "row",
      height: "auto",
    },
    [theme.breakpoints.between(600, 1920)]: {
      height: "auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    },
  },
  gridListTile: {
    width: "100% !important",
    height: "100% !important",
    // padding: "2vw !important",
  },
  root: {
    maxWidth: "100%",
    padding: "",
  },
  card_content: {
    padding: "0px",
  },

  card_header: {
    fontSize: "2.5vw",
  },
  card_content_box: {
    display: "column",
    gridTemplateColumns: "repeat(auto-fit,minmax(80px,1fr))",
    padding: "4px",
  },
  card_content_price: {
    marginLeft: "10px",
    // marginTop: "10px",
    // float: "right",
    [theme.breakpoints.between(0, 599)]: {
      fontSize: "5vw",
    },
    [theme.breakpoints.between(600, 1920)]: {
      fontSize: "1.5vw",
    },
  },
  card_content_sizelist: {
    display: "flex",
    flexDirection: "row",
    padding: "2px",
  },
  card_content_sizeicon: {
    margin: "3px",

    [theme.breakpoints.between(0, 599)]: {
      width: "10vw",
      height: "10vw",
    },
    [theme.breakpoints.between(600, 1920)]: {
      width: "3vw",
      height: "3vw",
    },
  },
  media: {
    height: "20%",
    paddingTop: "100%",
  },
  card_action: {
    display: "flex",
    flexDirection: "row",
  },
  IconButton: {
    padding: "0px",
  },
}));
