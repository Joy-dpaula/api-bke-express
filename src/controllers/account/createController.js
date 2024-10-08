import { accountValidateToCreate, createAccount } from "../../models/accountModel.js"

const createA = async (req, res, next) => {
  
    try {
        const account = req.body

        const accountValidate = accountValidateToCreate(account);

        console.log(accountValidate)

        if(accountValidate?.error) return res.status(401).json({
            error: "Erro ao criar conta!",
            fieldErrors: accountValidate.error.flatten().fieldErrors
        })

        const result = await createAccount(accountValidate.data);

        if (!result)
            return res.status(401).json({
                error: "Erro ao criar conta"
            })

        return res.json({
            sucess: "Conta criada com sucesso!",
            account: result
        })
    } catch (error) {
        next(error)
    }

}

export default createA