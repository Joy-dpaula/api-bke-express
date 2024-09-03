import { updateAccount } from "../../models/accountModel.js"

const updateController =  async (req, res) => {
    const account = req.body
    const {id} = req.params
    account.id = +id;

    const result = await updateAccount(account)

    if(!result)
        return res.status(401).json({
        error: "Erro ao atualizar account"
    })

    return res.json({
        sucess: "Account atualizada com sucesso!",
        account: result
    })
}

export default updateController
