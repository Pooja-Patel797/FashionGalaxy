import { addRole } from "../services/index";
import { Request, Response } from "express";

export const roleController = (req: Request, res: Response) => {
  let roleId = req.params.roleId;
  let roleName = req.params.roleName;

  const data = addRole(roleId, roleName)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch(() => {
      res.send("Its an error");
    });
};
