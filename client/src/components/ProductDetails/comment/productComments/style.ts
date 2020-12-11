import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  list: {
    height: "auto",
  },

  listItem: {
    display: "grid",
  },
  listItem__gridItem: {
    display: "flex",
    flexDirection: "row",
  },
  listItem__gridItem__heading: {
    margin: "0vw 0vw",
    marginLeft: "1vw",
    paddingLeft: "1vw",
  },
  listItem__gridItem__rating: {
    marginLeft: "7vw !important",
  },
  listItem__gridItem__date: {
    fontSize: "1vw",
    marginLeft: "2.5vw",
    marginTop: "0vw",
  },
  listItem__gridItem__comment: {
    marginLeft: "4vw",
  },
});
