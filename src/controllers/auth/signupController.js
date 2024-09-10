import { signup } from "../../models/authModel.js"

const createUser = async (req, res, next) => {

    const user = req.body;

    try {
        const result = await signup(user)

        if (!result)
            return res.status(401).json({
                error: "Erro ao criar account"
            })

        return res.json({
            sucess: "Conta criada com sucesso!",
            account: result
        })
    } catch (error) {
        next()
    }

}

export default createUser;