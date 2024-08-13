import express from 'express'

const router = express.Router()

router.post('/', (req, res) => {
    res.json({message: "/account - POST"})
});

router.get('/list', (req, res) => {
    res.json({message: "/account/list GET"})
});

router.get('/:id', (req, res) => {
    res.json({message: "/account/:id - GET"})
});

router.put('/:id', (req, res) => {
    res.json({message: "/account/:id - PUT"})
});

router.delete('/:id', (req, res) => {
    res.json({message: "/account/:id - DELETE"})
});

export default router