import {
  addUser,
  getAllUser,
  getUserById,
  deleteUser,
  updateUser,
  getUserByEmailPassword,
} from "../services/index";
import { Request, Response } from "express";

export const addUserController = (req: Request, res: Response) => {
  let { user } = req.body;
  console.log("in controller");
  console.log(user);
  const data = addUser(user).then((data) => {
    console.log(data);
    res.send(data);
  });
};

export const getUserByIdController = (req: Request, res: Response) => {
  let id = req.params.id;
  console.log("in controller");
  console.log(id);
  const data = getUserById(id).then((data) => {
    console.log(data);
    res.send(data);
  });
};

export const getUserByEmailPasswordController = (
  req: Request,
  res: Response
) => {
  let email = req.params.email;
  let password = req.params.password;
  getUserByEmailPassword(email, password).then((data) => {
    console.log(data);
    res.send(data);
  });
};

export const getAllUserController = (req: Request, res: Response) => {
  let id = req.params.id;
  const data = getAllUser(id).then((data) => {
    console.log(data);
    res.send(data);
  });
};

export const deleteUserController = (req: Request, res: Response) => {
  let id = req.params.id;
  console.log("in controller");
  console.log(id);
  const data = deleteUser(id).then((data) => {
    console.log(data);
    res.send("successfully deleted");
  });
};

export const updateUserController = (req: Request, res: Response) => {
  let id = req.params.id;
  let user = req.body;

  console.log("in controller");
  console.log(user);
  const data = updateUser(id, user).then((data) => {
    console.log(data);
    res.send(data);
  });
};
