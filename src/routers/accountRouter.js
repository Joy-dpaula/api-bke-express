import express from 'express'
import createController from '../controllers/account/createController.js';
import listController from '../controllers/account/listController.js';
import listIdController from '../controllers/account/byIdController.js';
import updateController from '../controllers/account/updateController.js';
import deleteController from '../controllers/account/deleteController.js';
import { auth } from '../middlewares/auth.js';

const router = express.Router()

router.post('/', auth, createController);

router.get('/list', listController);

router.get('/:id', listIdController);

router.put('/:id', updateController);

router.delete('/:id', deleteController);

export default router