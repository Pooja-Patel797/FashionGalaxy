import { addRole } from "../services/index";
import { Request, Response } from "express";

export const roleController = async (req: Request, res: Response) => {
  let roleId = req.params.roleId;
  let roleName = req.params.roleName;

  await addRole(roleId, roleName)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch(() => {
      res.send("Its an error");
    });
};
