import { Request, Response } from 'express'
import UserService from "../../services/user"

export const getUsersHandler = async (_req: Request, res: Response): Promise<void> => {
  const users = await UserService.getUsers()
  res.json(users)
}

export const createUserHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await UserService.createUser(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
}

export const getUserByIdHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const user = await UserService.getUserById(Number(id));
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter usuário' });
  }
}

export const updateUserHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const user = await UserService.updateUser({id:Number(id), ...req.body});
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar usuário' });
  }
}

export const deleteUserHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedUser = await UserService.deleteUser(Number(id));
    if (deletedUser) {
      res.json({success: 'Usuário excluído com sucesso'})
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir usuário' });
  }
}
