import { PrismaClient, User } from '@prisma/client'
import bcrypt from 'bcrypt';

const prisma = new PrismaClient()

export interface CreateUserInput {
  id?: number
  name: string
  email: string
  password: string
}

export interface UpdateUserInput{
  id: number
  name?: string
  email?: string
  password?: string
}

async function getHashedPassword(password: string): Promise<string> {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

async function createUser (data: CreateUserInput): Promise<User> {
  const user = await prisma.user.create({ 
    data :{
      name: data.name,
      email: data.email,
      password: await getHashedPassword(data.password)
    }
  })
  return user
}

async function updateUser(data: UpdateUserInput): Promise<User> {
  const userPassword =
    data.password != undefined
      ? await getHashedPassword(data.password)
      : undefined;

  const user = await prisma.user.update({
    where: { id: data.id },
    data: {
      name: data.name,
      email: data.email,
      password: userPassword,
    },
  });

  return user;
}

async function deleteUser(id: number): Promise<User | null> {
  const user = await prisma.user.delete({ where: { id } })
  return user
}

async function getUsers() {
  const users = await prisma.user.findMany()
  return users
}

async function getUserById(id: number): Promise<User | null> {
  const user = await prisma.user.findUnique({ where: { id } })
  return user
}

export default {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
  getUserById
}