import { listAccounts } from '../../models/accountModel.js'

const listController =  async (req, res) => {

    const accounts = await listAccounts()
    res.json({message: "Contas listadas com sucesso!",
     accounts
    })
}

export default listController