import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  container: {
    marginTop: "20vh",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "50vw 40vw",
  },
  imageWrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(2,minmax(150px,1fr))",
    gridColumnGap: "5px",
    height: "50vw",
  },
  productDetailsWrapper: {
    width: "100%",
    justifyContent: "center",
    marginLeft: "10%",
    marginTop: "6%",
  },
  imageWrapper__image: {
    // height: "50%",
  },
  productDetailsBox: {
    width: "50%",
    padding: "6px",
  },
  productImage: {
    width: "100%",
    height: "100%",
  },
  backdrop: {
    zIndex: 2,
    color: "#202020",
    overflowY: "scroll",
  },

  backdropProductImage: {
    width: "980px",
    height: "1306px",
    marginTop: "100vh",
  },
});
