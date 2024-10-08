import { updateAccount, accountValidateToUpdate } from "../../models/accountModel.js"

const updateController = async (req, res, next) => {

    try {
        const { id } = req.params

        const account = req.body

        account.id = +id

        const accountValidate = accountValidateToUpdate(account);

        if (accountValidate?.error) return res.status(401).json({
            error: "Erro ao atualizar um serviço!",
            fieldErrors: accountValidate.error.flatten().fieldErrors
        })

        const result = await updateAccount(accountValidate.data)

        if (!result)
            return res.status(401).json({
                error: "Erro ao criar atualizar!"
            })

        return res.json({
            success: "Conta atualizada com sucesso!",
            account: result
        })
    } catch (error) {
        if (error?.code === 'P2025')
            return res.status(404).json({
                error: `Conta com o id ${id}, não encontrado!`
            })
        next(error)
    }
}

export default updateController
