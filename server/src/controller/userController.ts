import {
  addUser,
  getAllUser,
  getUserById,
  deleteUser,
  updateUser,
  getUserByEmailPassword,
} from "../services/index";
import { Request, Response } from "express";

export const addUserController = async (req: Request, res: Response) => {
  let { user } = req.body;
  console.log("in controller");
  console.log(user);
  const data = await addUser(user).then((data) => {
    console.log(data);
    res.send(data);
  });
};

export const getUserByIdController = async (req: Request, res: Response) => {
  let id = req.params.id;
  console.log("in controller");
  console.log(id);
  await getUserById(id).then((data) => {
    console.log(data);
    res.send(data);
  });
};

export const getUserByEmailPasswordController = async (
  req: Request,
  res: Response
) => {
  let email = req.params.email;
  let password = req.params.password;
  await getUserByEmailPassword(email, password).then((data) => {
    console.log(data);
    res.send(data);
  });
};

export const getAllUserController = async (req: Request, res: Response) => {
  let id = req.params.id;
  await getAllUser(id).then((data) => {
    console.log(data);
    res.send(data);
  });
};

export const deleteUserController = async (req: Request, res: Response) => {
  let id = req.params.id;
  console.log("in controller");
  console.log(id);
  await deleteUser(id).then((data) => {
    console.log(data);
    res.send("successfully deleted");
  });
};

export const updateUserController = async (req: Request, res: Response) => {
  let id = req.params.id;
  let user = req.body;

  console.log("in controller");
  console.log(user);
  await updateUser(id, user).then((data) => {
    console.log(data);
    res.send(data);
  });
};
