import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createSession = async (user_id, token) => {

    const result = await prisma.session.create({
        data: {
            user_id: user_id,
            token: token
        }
    })

    return result;

}

export const deleteByToken = async (token) => {
    const result = await prisma.session.delete({
        where:{
            token
        }
    })
    return result
}


// export const listUsers = async (user) => {
//     const result = await prisma.user.findMany();

//     return result
// }

// export const getById = async (id) => {
//     const account = await prisma.user.findUnique({
//         where:{
//             public_id
//         }
//     })
//     return user
// }

// export const getByEmail = async (email) => {
//     const account = await prisma.user.findUnique({
//         where:{
//             email
//         }
//     })
//     return account
// }