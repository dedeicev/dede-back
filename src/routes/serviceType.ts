import { Router } from 'express'
import { createServiceTypeHandler, deleteServiceTypeHandler, getServiceTypeHandler, updateServiceTypeHandler } from '../modules/serviceType/serviceType'

const router = Router()

router.get('/', getServiceTypeHandler)
router.post('/', createServiceTypeHandler)
router.put('/:id', updateServiceTypeHandler)
router.delete('/:id', deleteServiceTypeHandler)

export default router
