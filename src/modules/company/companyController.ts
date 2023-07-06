import { Request, Response } from 'express'
import CompanyService from "../../services/company"

export const getCompaniesHandler = async (_req: Request, res: Response): Promise<void> => {
    const companies = await CompanyService.getCompanies()
    res.json(companies)
}

export const createCompanyHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const company = await CompanyService.createCompany(req.body);
        res.json(company);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro ao criar empresa' });
    }
}

export const getCompanyByIdHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const company = await CompanyService.getCompanyById(Number(id));
        if (company) {
            res.json(company);
        } else {
            res.status(404).json({ error: 'Empresa não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter empresa' });
    }
}

export const updateCompanyHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const company = await CompanyService.updateCompany({id: Number(id), ...req.body});
        if (company) {
            res.json(company);
        } else {
            res.status(404).json({ error: 'Empresa não encontrada' });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro ao atualizar empresa' });
    }
}

export const deleteCompanyHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const deletedCompany = await CompanyService.deleteCompany(Number(id));
        if (deletedCompany) {
            res.json({ success: 'Empresa excluída com sucesso' })
        } else {
            res.status(404).json({ error: 'Empresa não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir empresa' });
    }
}

export const getCompanyByCnpjHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { cnpj } = req.params;
        const company = await CompanyService.getCompanyByCnpj(cnpj);
        if (company) {
            res.json(company);
        } else {
            res.status(404).json({ error: 'Empresa não encontrada' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao obter empresa' });
    }
}