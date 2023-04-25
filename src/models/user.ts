import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export interface User {
  id?: number
  name: string
  email: string
}

export const createUser = async (data: User) => {
  const user = await prisma.user.create({ data })
  return user
}

export const updateUser = async (id: number, data: User) => {
  const user = await prisma.user.update({ where: { id }, data })
  return user
}

export const deleteUser = async (id: number) => {
  const user = await prisma.user.delete({ where: { id } })
  return user
}

export const getUsers = async () => {
  const users = await prisma.user.findMany()
  return users
}
