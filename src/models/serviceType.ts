import { PrismaClient, ServiceType } from '@prisma/client'

const prisma = new PrismaClient()

export interface CreateServiceType {
  name: string;
}

export interface UpdateServiceType{
  id: number;
  name?: string;
}

export const createServiceType = async (data: CreateServiceType): Promise<CreateServiceType> => {
  const serviceType = await prisma.serviceType.create({ data })
  return serviceType
}

export const readServiceType = async () => {
    const serviceType = await prisma.serviceType.findMany()
    return serviceType
}

export const updateServiceType = async (id: number, data: UpdateServiceType): Promise<ServiceType> => {
  const serviceType = await prisma.serviceType.update({ 
    where: { id: data.id },
    data: {
      name: data.name
    } 
  })
  return serviceType
}

export const deleteServiceType = async (id: number) => {
  const serviceType = await prisma.serviceType.delete({ where: { id } })
  return serviceType
}

export const getServiceType = async () => {
  const serviceType = await prisma.serviceType.findMany()
  return serviceType
}
