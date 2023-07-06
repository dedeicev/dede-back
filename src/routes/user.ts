import { Router } from 'express'
import { 
    createUserHandler, 
    deleteUserHandler, 
    getUserByIdHandler, 
    getUsersHandler, 
    updateUserHandler 
} from '../modules/user/userController'

const router = Router()

router.get('/', getUsersHandler)
router.post('/', createUserHandler)
router.get('/:id', getUserByIdHandler)
router.put('/:id', updateUserHandler)
router.delete('/:id', deleteUserHandler)

export default router
