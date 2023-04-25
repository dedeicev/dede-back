import { Router } from 'express'
import { createUserHandler, deleteUserHandler, getUsersHandler, updateUserHandler } from '../modules/user/user'

const router = Router()

router.get('/', getUsersHandler)
router.post('/', createUserHandler)
router.put('/:id', updateUserHandler)
router.delete('/:id', deleteUserHandler)

export default router
