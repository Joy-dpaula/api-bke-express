import { deleteAccount, accountValidateId } from "../../models/accountModel.js"

const deleteController = async (req, res, next) => {

    try {
        const { id } = req.params

        const accountValidate = accountValidateId(+id);

        if (accountValidate?.error) return res.status(401).json({
            error: "Erro ao deletar um serviço!",
            fieldErrors: accountValidate.error.flatten().fieldErrors
        })

        const account = await deleteAccount(accountValidate.data.id)

        return res.json({
            message: "/account/:id - DELETE",
            account
        })
    } catch (error) {
        next(error)
    }

}

export default deleteController