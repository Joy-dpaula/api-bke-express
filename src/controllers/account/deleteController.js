import { deleteAccount } from "../../models/accountModel.js"

const deleteController = async (req, res, next) => {

    const { id } = req.params

    try {
        const account = await deleteAccount(+id)

        return res.json({
            message: "/account/:id - DELETE",
            account
        })
    } catch (error) {
        next(error)
    }
   
}

export default deleteController