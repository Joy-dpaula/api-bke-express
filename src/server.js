import express from 'express';
import authRouter from './routers/authRouter.js'
import accountRouter from './routers/accountRouter.js'
import errorHandler from './middlewares/errorHandler.js';
import welcome from './controllers/welcome.js';
import logger from './middlewares/logger.js';
import { ENVIRONMENT, HOST, PORT } from './config.js';
import cors from 'cors'

const app = express();

app.use(logger)    
app.use(cors())
app.use(express.json())

app.get('/', welcome);
app.use('/auth', authRouter);
app.use('/account', accountRouter);

app.use(errorHandler)

app.listen(PORT, () => {
  // if (ENVIRONMENT == 'production')
  //   console.log(`Servidor rodando no ambiente ${ENVIRONMENT} em ${HOST}:${PORT} `)
  // else
  // console.log(`Servidor rodando no ambiente ${ENVIRONMENT} em ${HOST}: ${PORT}`)

  console.log(`Servidor rodando no ambiente ${ENVIRONMENT} em ${ENVIRONMENT == 'production' ? HOST : HOST + ':' + PORT}`)
});