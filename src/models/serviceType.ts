import { PrismaClient, ServiceType } from '@prisma/client'

const prisma = new PrismaClient()

export interface CreateServiceTypeInput {
  id?: number
  name: string
  description: string
}

export interface UpdateServiceTypeInput{
  id: number
  name?: string
  description?: string
}

async function createServiceType (data: CreateServiceTypeInput): Promise<ServiceType> {
  const serviceType = await prisma.serviceType.create({ 
    data :{
      name: data.name,
      description: data.description,
    }
  })
  return serviceType
}

async function updateServiceType(data: UpdateServiceTypeInput): Promise<ServiceType> {
  const serviceType = await prisma.serviceType.update({
    where: { id: data.id },
    data: {
      name: data.name,
      description: data.description,
    },
  });

  return serviceType;
}

async function deleteServiceType(id: number): Promise<ServiceType | null> {
  const serviceType = await prisma.serviceType.delete({ where: { id } })
  return serviceType
}

async function getServiceTypes() {
  const ServiceTypes = await prisma.serviceType.findMany()
  return ServiceTypes
}

async function getServiceTypeById(id: number): Promise<ServiceType | null> {
  const serviceType = await prisma.serviceType.findUnique({ where: { id } })
  return serviceType
}

export default {
  createServiceType,
  deleteServiceType,
  getServiceTypes,
  updateServiceType,
  getServiceTypeById
}