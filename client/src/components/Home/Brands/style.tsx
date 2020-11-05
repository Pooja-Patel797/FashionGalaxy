import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  gridList: {
    display: "grid",
    marginTop: "5vw",
    gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
    width: "100%",
    height: "auto",
  },
  gridListTile: {
    padding: "1vw !important",
    width: "100%  !important",
    height: "auto !important",
    textAlign: "center",
  },
  brand: {
    position: "relative",
    width: "50%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  brandlogo: {
    width: "15vw",
    height: "10vw",
  },
  brandlogoImg: {
    width: "7vw",
    alignItems: "center",
    padding: "2px",
  },
  brandDetails: {},
  brandDetails_heading1: {
    margin: "0px !important",
    fontSize: "1vw !important",
  },
  brandDetails_heading2: {
    margin: "0px !important",
    fontSize: "1vw !important",
    color: "red",
  },
});
