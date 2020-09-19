import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  container: {
    marginTop: "5vw",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "50vw 40vw",
  },
  imageWrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(2,minmax(300px,1fr))",
    height: "auto",
  },
  productDetailsWrapper: {
    width: "100%",
    justifyContent: "center",
    marginLeft: "10%",
    marginTop: "6%",
  },
  productDetailsBox: {
    width: "50%",
    padding: "6px",
  },
  productImage: {
    width: "100%",
    height: "100%",
  },
});
