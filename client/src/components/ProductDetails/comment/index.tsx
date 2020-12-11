import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./style";
import { ProductComments } from "./productComments";
import { WriteComment } from "./writeComments";
import IComment, { getCommentsById } from "../../../api/comment";
import { getLocalStorage } from "../../../utils/localstorage";

type IProps = {
  pid: string;
};

export const Comment: React.FC<IProps> = (props) => {
  const [comments, setComments] = useState<Array<IComment>>([]);

  const classes = useStyles();

  const getProductComments = async (pid: string) => {
    const data = await getCommentsById(pid);
    setComments(data);
  };

  const getCommentBox = () => {
    const user = getLocalStorage("user");
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
  }, [props.pid]);

  return (
    <Box className={classes.flex}>
      {getCommentBox()}
      <ProductComments comments={comments} />
    </Box>
  );
};
