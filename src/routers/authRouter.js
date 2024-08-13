import express from 'express'

const router = express.Router()

router.post('/signup', (req, res) => {
    res.json({message: "/auth/signup - POST"})
});

router.post('/login', (req, res) => {
    res.json({message: "/auth/login - POST"})
});

router.post('/logout', (req, res) => {
    res.json({message: "/auth/logou - POST"})
});

export default router