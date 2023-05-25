import { Request, Response } from 'express'
import serviceTypeService from "../../services/serviceType"

export const getServiceTypeHandler = async (_req: Request, res: Response): Promise<void> => {
  const serviceType = await serviceTypeService.getServiceTypes()
  res.json(serviceType)
}

export const createServiceTypeHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const serviceType = await serviceTypeService.createServiceType(req.body);
    res.json(serviceType);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar Tipo de Serviço' });
  }
}

export const getServiceTypeByIdHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const serviceType = await serviceTypeService.getServiceTypeById(Number(id));
    if (serviceType) {
      res.json(serviceType);
    } else {
      res.status(404).json({ error: 'Tipo de Serviço não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter Tipo de Serviço' });
  }
}

export const updateServiceTypeHandler = async (req: Request, res: Response): Promise<void> =>{
  try {
    const { id } = req.params;
    const serviceType = await serviceTypeService.updateServiceType({id:Number(id), ...req.body});
    if (serviceType) {
      res.json(serviceType);
    } else {
      res.status(404).json({ error: 'Tipo de Serviço não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar Tipo de Serviço' });
  }
}

export const deleteServiceTypeHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedServiceType = await serviceTypeService.deleteServiceType(Number(id));
    if (deletedServiceType) {
      res.json({success: 'Tipo de Serviço excluído com sucesso'})
    } else {
      res.status(404).json({ error: 'Tipo de Serviço não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir Tipo de Serviço' });
  }
}
