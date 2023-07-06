import { ServiceType } from "@prisma/client";
import ServiceTypeModel, { CreateServiceTypeInput, UpdateServiceTypeInput } from "../models/serviceType";

async function createServiceType(data: CreateServiceTypeInput): Promise<ServiceType> {
  const serviceType = await ServiceTypeModel.createServiceType(data);
  return serviceType;
}

async function getServiceTypes(): Promise<Array<ServiceType> | null> {
  const serviceTypes = await ServiceTypeModel.getServiceTypes()
  return serviceTypes;
}

async function getServiceTypeById(id: number): Promise<ServiceType | null> {
  const serviceType = await ServiceTypeModel.getServiceTypeById(id)
  return serviceType;
}

async function updateServiceType(data: UpdateServiceTypeInput): Promise<ServiceType> {
  const serviceType = await ServiceTypeModel.updateServiceType(data)
  return serviceType;
}

async function deleteServiceType(id: number): Promise<ServiceType | null> {
  const serviceType = await ServiceTypeModel.deleteServiceType(id)
  return serviceType;
}

export default {
  createServiceType,
  getServiceTypes,
  getServiceTypeById,
  updateServiceType,
  deleteServiceType,
};