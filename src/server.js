// const express = require('express');

import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.json({
        message: "Hello World!",
        success: "Sucesso ao executar API"
    })
});

app.listen(3000, () => {
  console.log('http://localhost:3000')  
});