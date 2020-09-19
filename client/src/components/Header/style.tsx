import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  imgicon: {
    width: "6%",
    height: "4%",
  },
  carticon: {
    //marginRight: "20px",
  },
  link_wrapper: {
    marginTop: "12px",
  },
  link: {
    textDecoration: "none",
    marginTop: "1vw",
    fontSize: "1.5vw",

    // padding: "10px"
  },
  profile: {
    width: "3vw",
  },
  search: {
    border: "1px solid gray",
    padding: "10px",
    //marginTop:"2px",
    height: "4vw",
    width: "50%",
    justifyContent: "left",
  },
  cart: {
    display: "flex",
    flexDirection: "column",
    marginTop: "-18px",
    width: "100%",
  },
  searchIcon: {
    display: "inline",
    float: "left",
  },

  notificationIcon: {
    backgroundColor: "#ff3333",
    fontSize: "1vw",
    width: "1.5vw",
    height: "1.5vw",
    // marginTop: "-1.5vw",
    borderRadius: "50%",
    textAlign: "center",
    marginLeft: "20px",
  },
  username: {
    fontSize: "12px",
  },
});
