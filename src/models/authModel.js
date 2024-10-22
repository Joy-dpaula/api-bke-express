import { PrismaClient } from "@prisma/client";
import { z } from 'zod';

const prisma = new PrismaClient();

const accountSchema = z.object({
    id: z.number({
        invalid_type_error: "O id deve ser um valor numérico",
        required_error: "O id é obrigatório"
    })
        .positive({ message: "O id deve ser um número positivo maior que 0" }),
    public_id: z.string({
        invalid_type_error: "O  public_id deve ser uma string",
        required_error: "O  public_id é obrigatório"
    })
        .min(1, { message: "O nome do serviço deve ter ao menos 1 caracter" })
        .max(255, { message: "O public_id deve ter no máximo 255 caracteres" }),
    name: z.string({
        invalid_type_error: "O name deve ser uma string",
        required_error: "O name é obrigatório"
    })
        .min(3, { message: "O name deve ter ao menos 3 caracter" })
        .max(255, { message: "O name deve ter no máximo 255 caracteres" }),
    email: z.string({
        invalid_type_error: "O email deve ser uma string",
        required_error: "O email é obrigatório"
    })
        .email({ message: "Email Inválido" })
        .min(11, { message: "o email deve ter no mínimo 11 caracteres" })
        .max(1000, { message: "o email deve ter no máximo 1000 caracteres" })
        .optional(),
    pass: z.string({
        invalid_type_error: "A senha deve ser uma string",
        required_error: "A senha é obrigatória"
    })
        .min(6, { message: "A senha deve ter ao menos 6 caracter" })
        .max(500, { message: "A senha deve ter no máximo 500 caracteres" }),
    avatar: z.string({
        invalid_type_error: "O avatar deve ser uma string",
    }).optional(),
})

export const userValidateToCreate = (account) => {
    const partialAccountSchema = accountSchema.partial({ id: true, public_id: true })
    return partialAccountSchema.safeParse(account)
}

export const userValidateToUpdate = (account) => {
    return accountSchema.safeParse(account)
}

export const signup = async (user) => {

    const result = await prisma.user.create({
        data: user
    })

    return result;

}

export const listUsers = async (user) => {
    const result = await prisma.user.findMany();

    return result
}

export const getById = async (id) => {
    const account = await prisma.user.findUnique({
        where:{
            public_id
        }
    })
    return user
}