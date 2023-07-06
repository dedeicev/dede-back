import { Router } from "express";
import { 
    createCustomerHandler, 
    deleteCustomerHandler, 
    getCustomerByIdHandler, 
    getCustomerByCpfHandler, 
    getCustomersHandler, 
    updateCustomerHandler 
} from "../modules/customer/customerController";

const router = Router()

router.get('/', getCustomersHandler)
router.post('/', createCustomerHandler)
router.get('/:id', getCustomerByIdHandler)
router.put('/:id', updateCustomerHandler)
router.delete('/:id', deleteCustomerHandler)
router.get('/cpf/:cpf', getCustomerByCpfHandler)

export default router