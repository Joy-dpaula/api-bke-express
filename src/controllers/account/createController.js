import { createAccount } from "../../models/accountModel.js"

const createA = async (req, res) => {
    const account = req.body
    const result = await createAccount(account)

    if(!result)
        return res.status(401).json({
        error: "Erro ao criar account"
    })

    return res.json({
        sucess: "Conta criada com sucesso!",
        account: result
    })
}

export default createA