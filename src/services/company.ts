import { Company } from "@prisma/client";
import CompanyModel, { CreateCompanyInput, UpdateCompanyInput } from "../models/company";

async function createCompany(data: CreateCompanyInput): Promise<Company> {
    const company = await CompanyModel.createCompany(data)
    return company
}

async function getCompanyById(id: number): Promise<Company | null> {
    const company = await CompanyModel.getCompanyById(id)
    return company
}

async function updateCompany(data: UpdateCompanyInput): Promise<Company | null> {
    const company = await CompanyModel.updateCompany(data)
    return company
}

async function deleteCompany(id: number): Promise<Company | null> {
    const company = await CompanyModel.deleteCompany(id)
    return company
}

async function getCompanies(): Promise<Company[]> {
    const companies = await CompanyModel.getCompanies()
    return companies
}

async function getCompanyByCnpj(cnpj: string): Promise<Company | null> {
    const company = await CompanyModel.getCompanyByCnpj(cnpj)
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