import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    marginTop: "-25px",
  },
  flexBox: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  content: {
    position: "absolute",
    marginTop: "10%",
    marginLeft: "2%",

    width: "52vw",
    height: "2vw",
  },
  heading1: {
    fontFamily: "Bold",
    fontSize: "5vw",
  },
  keyword: {
    fontSize: "5vw",
    marginLeft: "8vw",
    marginTop: "2vw",
    fontFamily: "cursive",
    color: "darkcyan",
  },

  heading2: {
    fontSize: "1.5vw",
    marginTop: "5vw",
    fontFamily: "cursive",
    color: "midnightblue",
  },

  imageWrapper: {
    height: "",
    width: "100%",
  },
  image: {
    width: "75vw",
    float: "right",
    marginRight: "-20vh",
  },
}));
