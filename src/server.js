import express from 'express';
import authRouter from './routers/authRouter.js'
import accountRouter from './routers/accountRouter.js'
import { ENVIRONMENT, HOST, PORT } from './config.js';

const app = express();

app.use('/auth', authRouter)
app.use('/account', accountRouter)

app.listen(PORT, () => {
    console.log(`Servidor rodando no ambiente ${ ENVIRONMENT } em ${HOST}:${PORT} `)  
});