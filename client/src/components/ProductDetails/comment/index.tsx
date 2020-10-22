import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./style";
import { ProductComments } from "./productComments";
import { WriteComment } from "./writeComments";
import { getCommentsById } from "../../../api/comment";
import { getLocalStorage } from "../../../utils/localstorage";

let initialComment = {
  comment: "",
  rating: 0,
};

type Iprops = {
  pid: string;
};

export const Comment = (props: Iprops) => {
  const [comments, setComments] = useState([]);

  const classes = useStyles();

  let getProductComments = async (pid: string) => {
    let data = await getCommentsById(pid);
    setComments(data);
  };

  let getCommentBox = () => {
    let user = getLocalStorage("user");
    console.log("Heu user");
    console.log(user);
    if (user) {
      return (
        <WriteComment getProductComments={getProductComments} pid={props.pid} />
      );
    }
  };
  useEffect(() => {
    getProductComments(props.pid);
  }, []);

  return (
    <Box className={classes.flex}>
      {getCommentBox()}
      <ProductComments comments={comments} />
    </Box>
  );
};
