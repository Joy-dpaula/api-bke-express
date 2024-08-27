import { getByIdAccount } from "../../models/accountModel.js"

const byIdController = async (req, res) => {

    const { id } = req.params

    const account = await getByIdAccount(+id)

    if (!account)
        return res.status(404).json({
            error: `Conta com o id ${id} não encontrado!`
        })

    return res.json({
        success: "/account/:id - GET",
        account
    })
}

export default byIdController