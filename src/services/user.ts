import { User } from "@prisma/client";
import UserModel, { CreateUserInput, UpdateUserInput } from "../models/user";

async function createUser(data: CreateUserInput): Promise<User> {
  const user = await UserModel.createUser(data);
  return user;
}

async function getUsers(): Promise<Array<User> | null> {
  const users = await UserModel.getUsers()
  return users;
}

async function getUserById(id: number): Promise<User | null> {
  const user = await UserModel.getUserById(id)
  return user;
}

async function updateUser(data: UpdateUserInput): Promise<User> {
  const user = await UserModel.updateUser(data)
  return user;
}

async function deleteUser(id: number): Promise<User | null> {
  const user = await UserModel.deleteUser(id)
  return user;
}

export default {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
