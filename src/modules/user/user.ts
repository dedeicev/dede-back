import { Request, Response } from 'express'
import { createUser, deleteUser, getUsers, updateUser, User } from '../../models/user'

export const getUsersHandler = async (_req: Request, res: Response) => {
  const users = await getUsers()
  res.json(users)
}

export const createUserHandler = async (req: Request, res: Response) => {
  const user: User = req.body
  const createdUser = await createUser(user)
  res.json(createdUser)
}

export const updateUserHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const user: User = req.body
  const updatedUser = await updateUser(id, user)
  res.json(updatedUser)
}

export const deleteUserHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const deletedUser = await deleteUser(id)
  res.json(deletedUser)
}
