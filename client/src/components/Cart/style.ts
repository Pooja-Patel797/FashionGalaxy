import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    width: "65vw",
  },
  gridListTile: {
    display: "flex",
    flexDirection: "row",
    margin: "2vw",
    height: "20vw !important",
  },
  title: {
    color: "blue",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  gridListTile__image: {
    height: "100%",
    margin: "2vw",
  },
  gridListTile__content: {
    padding: "2vw",
  },
});
