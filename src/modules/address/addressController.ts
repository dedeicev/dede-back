import { Request, Response } from 'express'

import AddressService from "../../services/address"

export const getAddressesHandler = async (_req: Request, res: Response): Promise<void> => {
    const addresses = await AddressService.getAddresses()
    res.json(addresses)
}

export const createAddressHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const address = await AddressService.createAddress(req.body);
        res.json(address);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar endereço' });
    }
}

export const getAddressByIdHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const address = await AddressService.getAddressById(Number(id));
        if (address) {
            res.json(address);
        } else {
            res.status(404).json({ error: 'Endereço não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter endereço' });
    }
}

export const updateAddressHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const address = await AddressService.updateAddress({ id: Number(id), ...req.body });
        if (address) {
            res.json(address);
        } else {
            res.status(404).json({ error: 'Endereço não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar endereço' });
    }
}

export const deleteAddressHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const deletedAddress = await AddressService.deleteAddress(Number(id));
        if (deletedAddress) {
            res.json({ success: 'Endereço excluído com sucesso' })
        } else {
            res.status(404).json({ error: 'Endereço não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir endereço' });
    }
}
