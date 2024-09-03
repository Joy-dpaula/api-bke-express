import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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