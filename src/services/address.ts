import { Address } from "@prisma/client";

import AddressModel, { CreateAddressInput, UpdateAddressInput } from "../models/address";


async function createAddress(data: CreateAddressInput): Promise<Address> {
    const address = await AddressModel.createAddress(data);
    return address;
}

async function getAddresses(): Promise<Array<Address> | null> {
    const addresses = await AddressModel.getAddresses()
    return addresses;
}

async function getAddressById(id: number): Promise<Address | null> {
    const address = await AddressModel.getAddressById(id)
    return address;
}

async function updateAddress(data: UpdateAddressInput): Promise<Address> {
    const address = await AddressModel.updateAddress(data)
    return address;
}

async function deleteAddress(id: number): Promise<Address | null> {
    const address = await AddressModel.deleteAddress(id)
    return address;
}


export default {
    createAddress,
    getAddresses,
    getAddressById,
    updateAddress,
    deleteAddress,
}