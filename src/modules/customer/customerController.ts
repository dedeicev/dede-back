import { Request, Response } from 'express'
import CustomerService from "../../services/customer"

export const getCustomersHandler = async (_req: Request, res: Response): Promise<void> => {
    const customers = await CustomerService.getCustomers()
    res.json(customers)
}

export const createCustomerHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const customer = await CustomerService.createCustomer(req.body);
        res.json(customer);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar cliente' });
    }
}

export const getCustomerByIdHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const customer = await CustomerService.getCustomerById(Number(id));
        if (customer) {
            res.json(customer);
        } else {
            res.status(404).json({ error: 'Cliente não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter cliente' });
    }
}

export const updateCustomerHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const customer = await CustomerService.updateCustomer({id: Number(id), ...req.body});
        if (customer) {
            res.json(customer);
        } else {
            res.status(404).json({ error: 'Cliente não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar cliente' });
    }
}

export const deleteCustomerHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const deletedCustomer = await CustomerService.deleteCustomer(Number(id));
        if (deletedCustomer) {
            res.json({ success: 'Cliente excluído com sucesso' })
        } else {
            res.status(404).json({ error: 'Cliente não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir cliente' });
    }
}

export const getCustomerByCpfHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { cpf } = req.params;
        const customer = await CustomerService.getCustomerByCpf(cpf);
        if (customer) {
            res.json(customer);
        } else {
            res.status(404).json({ error: 'Cliente não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter cliente' });
    }
}