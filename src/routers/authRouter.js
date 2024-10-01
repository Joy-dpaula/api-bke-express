import express from 'express'
import signup from '../controllers/auth/signupController.js';
import login from '../controllers/auth/loginController.js';
import logout from '../controllers/auth/logoutController.js';
import listController from '../controllers/auth/listUsersController.js';

const router = express.Router()

router.post('/signup', signup);

router.post('/login', login);

router.post('/logout', logout);

router.get('/list', listController);

export default router;