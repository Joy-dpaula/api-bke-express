import { listAccounts } from '../../models/accountModel.js'

const listController = async (req, res) => {
    try {
        const accounts = await listAccounts()
        res.json({
            message: "Contas listadas com sucesso!",
            accounts
        })
    } catch (err) {
        console.error(err)
        return res.status(500).json({
            error: "Erro no servidor!"
        })
    }
}

export default listController