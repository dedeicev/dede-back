import {Customer} from "@prisma/client"

import CustomerModel, {CreateCustomerInput, UpdateCustomerInput} from "../models/customer"

async function createCustomer(data: CreateCustomerInput): Promise<Customer> {
    const customer = await CustomerModel.createCustomer(data)
    return customer
}

async function getCustomerById(id: number): Promise<Customer | null> {
    const customer = await CustomerModel.getCustomerById(id)
    return customer
}

async function updateCustomer(data: UpdateCustomerInput): Promise<Customer | null> {
    const customer = await CustomerModel.updateCustomer(data)
    return customer
}

async function deleteCustomer(id: number): Promise<Customer | null> {
    const customer = await CustomerModel.deleteCustomer(id)
    return customer
}

async function getCustomers(): Promise<Customer[]> {
    const customers = await CustomerModel.getCustomers()
    return customers
}

async function getCustomerByCpf(cpf: string): Promise<Customer | null> {
    const customer = await CustomerModel.getCustomerByCpf(cpf)
    return customer
}

export default {
    createCustomer,
    getCustomerById,
    updateCustomer,
    deleteCustomer,
    getCustomers,
    getCustomerByCpf
}