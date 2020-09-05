import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  imgicon: {
    width: "6%",
    height: "4%",
  },
  carticon: {
    //marginRight: "20px",
  },

  link: {
    textDecoration: "none",
    // fontWeight: "Bold",
    fontSize: "2vw",
    marginTop: "12px",
    // padding: "10px"
  },

  search: {
    border: "1px solid gray",
    padding: "10px",
    //marginTop:"2px",
    height: "2%",
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
    backgroundColor: "red",
    fontSize: "1vw",
    width: "20px",
    height: "20px",
    // marginTop: "-1.5vw",
    borderRadius: "50%",
    textAlign: "center",
    marginLeft: "20px",
  },
});
