import { PrismaClient, Customer } from '@prisma/client'

const prisma = new PrismaClient()

export interface CreateCustomerInput {
    id?: number
    cpf: string
    user: {
        name: string
        email: string
        password: string
    }
}

export interface UpdateCustomerInput {
    id: number
    cpf?: string
    user: {
        name?: string
        email?: string
        password?: string
    }
}


async function createCustomer(data: CreateCustomerInput): Promise<Customer> {
    
    const customer = await prisma.customer.create({
        data: {
            cpf: data.cpf,
            user: {
                create: {
                    name: data.user.name,
                    email: data.user.email,
                    password: data.user.password
                }
            }

        }
    });
    
    return customer
  }
  
async function getCustomerById(id: number): Promise<Customer | null> {
    const customer = await prisma.customer.findUnique({ where: { id } });
    return customer
}
  
async function updateCustomer(data: UpdateCustomerInput): Promise<Customer | null> {
    const customer = await prisma.customer.update({ 
        where: { id: data.id }, 
        data : {
            cpf: data.cpf,
            user: {
                update: {
                    name: data.user.name,
                    email: data.user.email,
                    password: data.user.password
                }
            }
        }
    })
    return customer
}
  
async function deleteCustomer(id: number): Promise<Customer | null> {
    return prisma.customer.delete({ where: { id } });
}

async function getCustomers(): Promise<Customer[]> {
    const customers = await prisma.customer.findMany()
    return customers
}

async function getCustomerByCpf(cpf: string): Promise<Customer | null> {
    const customer = await prisma.customer.findUnique({ where: { cpf } });
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