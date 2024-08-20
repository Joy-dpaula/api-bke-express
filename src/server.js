import express from 'express';
import authRouter from './routers/authRouter.js'
import accountRouter from './routers/accountRouter.js'
import { ENVIRONMENT, HOST, PORT } from './config.js';

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: "Bem vindo a API"
  }
  )
})

app.use('/auth', authRouter)
app.use('/account', accountRouter)

app.listen(PORT, () => {
  // if (ENVIRONMENT == 'production')
  //   console.log(`Servidor rodando no ambiente ${ENVIRONMENT} em ${HOST}:${PORT} `)
  // else
  // console.log(`Servidor rodando no ambiente ${ENVIRONMENT} em ${HOST}: ${PORT}`)

  console.log(`Servidor rodando no ambiente ${ENVIRONMENT} em ${ENVIRONMENT == 'production' ? HOST : HOST + ':' + PORT}`)
});