import { deleteByToken } from "../../models/sessionModel.js"

const logout = async (req, res, next) => {

    try {
        const { accessToken } = req.body

        if (!accessToken)
            return res.status(401).json({
                error: 'Erro no logout, access token não informado'
            })

        const result = await deleteByToken(accessToken)

        return res.json({
            success: "Logout efetuado com sucesso!",
            user: result
        })
    } catch (error) {
        next(error)
    }
}

export default logout