import { Router } from "express";

import { 
    createAddressHandler, 
    deleteAddressHandler, 
    getAddressByIdHandler, 
    getAddressesHandler, 
    updateAddressHandler 
} from "../modules/address/addressController";


const router = Router()

router.get('/', getAddressesHandler)
router.post('/', createAddressHandler)
router.get('/:id', getAddressByIdHandler)
router.put('/:id', updateAddressHandler)
router.delete('/:id', deleteAddressHandler)

export default router