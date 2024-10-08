import { getByIdAccount, accountValidateId } from "../../models/accountModel.js"

const byIdController = async (req, res, next) => {

    try {

        const { id } = req.params

        const accountValidate = accountValidateId(+id);

        if (accountValidate?.error) return res.status(401).json({
            error: "Erro ao buscar um serviço!",
            fieldErrors: accountValidated.error.flatten().fieldErrors
        })

        const account = await getByIdAccount(accountValidate.data.id)

        if (!account)
            return res.status(404).json({
                error: `Conta com o id ${id} não encontrado!`
            })

        return res.json({
            success: "/account/:id - GET",
            account
        })
    } catch (error) {
        next(error)
    }

}

export default byIdController