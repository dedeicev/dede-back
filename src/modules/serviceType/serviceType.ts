import { Request, Response } from 'express'
import { createServiceType, deleteServiceType, getServiceType, updateServiceType, CreateServiceType, UpdateServiceType } from '../../models/serviceType'

export const getServiceTypeHandler = async (_req: Request, res: Response) => {
  const serviceType = await getServiceType()
  res.json(serviceType)
}

export const createServiceTypeHandler = async (req: Request, res: Response) => {
  const serviceType: CreateServiceType = req.body
  const createdServiceType = await createServiceType(serviceType)
  res.json(createdServiceType)
}

export const updateServiceTypeHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const serviceType: UpdateServiceType = req.body
  const updatedServiceType = await updateServiceType(id, serviceType)
  res.json(updatedServiceType)
}

export const deleteServiceTypeHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const deletedServiceType = await deleteServiceType(id)
  res.json(deletedServiceType)
}
