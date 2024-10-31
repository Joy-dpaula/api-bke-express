import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../config.js'

export const auth = (req, res, next) => {
    const authorization = req.headers.authorization

    if (!authorization)
        return res.status(403).json({ error: 'Não autorizado, access token não informado' })

    const accessToken = authorization.split(' ')[1]

    if (!accessToken)
        return res.status(403).json({ error: 'Não autorizado, Bearer com accessToken não informado!' })

    try {
        const result = jwt.verify(accessToken, SECRET_KEY)
        console.log(result)

    } catch (error) {
        console.log(error)
    }

    return res.json({ test: 'ok' })
}