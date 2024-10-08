import { PrismaClient } from '@prisma/client'
import { z } from 'zod';

const prisma = new PrismaClient();

const accountSchema = z.object({
    id: z.number().positive(),
    service: z.string().min(1).max(255),
    username: z.string().min(3).max(255),
    logo_image: z.string().url(11).max(1000),
    pass: z.string().min(8).max(500),
    user_id: z.number().positive()
})

export const accountValidateToCreate = (account) => {
    const partialAccountSchema = accountSchema.partial({id: true})
    return accountSchema.safeParse(account)
}

export const listAccounts = async () => {
    const accounts = await prisma.account.findMany()

    return accounts
}

export const getByIdAccount = async (id) => {
    const account = await prisma.account.findUnique({
        where: {
            id
        }
    })

    return account
}


export const createAccount = async (account) => {
    const result = await prisma.account.create({
        data: account
    })

    return result
}

export const updateAccount = async (account) => {
    const result = await prisma.account.update({
        data: account,
        where: {
            id: account.id
        }
    })

    return result
}

export const deleteAccount = async (id) => {
    const account = await prisma.account.delete({
        where: {
            id
        }
    })

    return account
}
