import { userValidateToLogin, getByEmail } from "../../models/authModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { SECRET_KEY } from "../../config.js"
import { createSession } from "../../models/sessionModel.js"

const login = async (req, res, next) => {
    try {
        const loginData = req.body

        const userValidated = userValidateToLogin(loginData)

        if (userValidated?.error)
            return res.status(401).json({
                error: "Erro ao fazer o login! (dados de entrada inválidos)"
            })

        const { email, pass } = userValidated.data

        const user = await getByEmail(email)
        
        if (!user)
            return res.status(401).json({
                error: "Email ou senha inválidos"
            })

        const passIsValid = bcrypt.compareSync(pass, user.pass)

        const token = jwt.sign({public_id: user.public_id, name: user.name }, SECRET_KEY, { expiresIn: 60 * 5})

        await createSession(user.id, token)

        return res.json({
            success: "Login efetuado com sucesso!",
            accessToken: token,
            user: {
                public_id: user.public_id,
                name: user.name,
                avatar: user.avatar,
                email: user.email
            }
        })
    } catch (error) {
        next(error)
    }
}

export default login