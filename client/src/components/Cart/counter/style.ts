import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  grid_container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
   // height: "100%",
  },

  grid__item1: {
    minWidth: "2vw",
    height: "2vw",
    borderRadius: "50%",
    backgroundColor: "gray",
    margin: "1.2vw",
  },
  grid__heading: {
    // marginTop: "0px !important",
    fontSize: "1vw ",
  },
  grid__item2: {
    minWidth: "2vw",
    height: "2vw",
    borderRadius: "50%",
    backgroundColor: "gray",
    margin: "1.2vw",
  },
});
