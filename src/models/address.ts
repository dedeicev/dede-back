import { PrismaClient, Address } from "@prisma/client";


const prisma = new PrismaClient();

export interface CreateAddressInput {
    id?: number;
    street: string;
    number: string;
    complement: string;
    district: string;
    city: string;
    state: string;
    zipCode: string;
    customerId: number;
}

export interface UpdateAddressInput {
    id: number;
    street?: string;
    number?: string;
    complement?: string;
    district?: string;
    city?: string;
    state?: string;
    zipCode?: string;
}

async function createAddress(data: CreateAddressInput): Promise<Address> {
    const address = await prisma.address.create({
        data: {
            street: data.street,
            number: data.number,
            complement: data.complement,
            district: data.district,
            city: data.city,
            state: data.state,
            zipCode: data.zipCode,
            customerId: data.customerId,
        },
    });
    return address;
}

async function getAddressById(id: number): Promise<Address | null> {
    const address = await prisma.address.findUnique({ where: { id } });
    return address;
}

async function updateAddress(data: UpdateAddressInput): Promise<Address> {
    const address = await prisma.address.update({ where: { id: data.id }, data });
    return address;
}

async function deleteAddress(id: number): Promise<Address | null> {
    const address = await prisma.address.delete({ where: { id } });
    return address;
}


async function getAddresses(): Promise<Address[]> {
    const addresses = await prisma.address.findMany();
    return addresses;
}


export default {
    createAddress,
    getAddressById,
    updateAddress,
    deleteAddress,
    getAddresses,
}