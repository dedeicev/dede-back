import { PrismaClient, Company } from "@prisma/client";

const prisma = new PrismaClient();

export interface CreateCompanyInput {
    id?: number
    cnpj: string
    name: string
    phone: string
    user: {
        name: string
        email: string
        password: string
    }
}

export interface UpdateCompanyInput {
    id: number
    cnpj?: string
    user: {
        name?: string
        email?: string
        password?: string
    }
    name?: string
    phone?: string
}

async function createCompany(data: CreateCompanyInput): Promise<Company> {

    const company = await prisma.company.create({
        data: {
            cnpj: data.cnpj,
            name: data.name,
            phone: data.phone,
            user: {
                create: {
                    name: data.user.name,
                    email: data.user.email,
                    password: data.user.password
                }
            }
        }
    });

    return company
}

async function getCompanyById(id: number): Promise<Company | null> {
    const company = await prisma.company.findUnique({ where: { id } });
    return company
}

async function updateCompany(data: UpdateCompanyInput): Promise<Company | null> {
    const company = await prisma.company.update({
        where: { id: data.id },
        data: {
            cnpj: data.cnpj,
            name: data.name,
            phone: data.phone,
            user: {
                update: {
                    name: data.user.name,
                    email: data.user.email,
                    password: data.user.password
                }
            }
        }
    });
    return company
}

async function deleteCompany(id: number): Promise<Company | null> {
    const company = await prisma.company.delete({ where: { id } });
    return company
}

async function getCompanies(): Promise<Company[]> {
    const companies = await prisma.company.findMany();
    return companies
}

async function getCompanyByCnpj(cnpj: string): Promise<Company | null> {
    const company = await prisma.company.findUnique({ where: { cnpj } });
    return company
}

export default {
    createCompany,
    getCompanyById,
    updateCompany,
    deleteCompany,
    getCompanies,
    getCompanyByCnpj
}