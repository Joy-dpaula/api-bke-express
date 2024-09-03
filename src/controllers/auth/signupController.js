import { signup } from "../../models/authModel.js"

const createUser = async (req, res) => {

    const user = req.body;
    const result = await signup(user)

    if(!result)
        return res.status(401).json({
        error: "Erro ao criar account"
    })

    return res.json({
        sucess: "Conta criada com sucesso!",
        account: result
    })
}

export default createUser;