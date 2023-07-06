import { Router } from "express";
import {
    createCompanyHandler,
    deleteCompanyHandler,
    getCompanyByIdHandler,
    getCompanyByCnpjHandler,
    getCompaniesHandler,
    updateCompanyHandler
} from "../modules/company/companyController";


const router = Router()

router.get('/', getCompaniesHandler)
router.post('/', createCompanyHandler)
router.get('/:id', getCompanyByIdHandler)
router.put('/:id', updateCompanyHandler)
router.delete('/:id', deleteCompanyHandler)
router.get('/cnpj/:cnpj', getCompanyByCnpjHandler)

export default router