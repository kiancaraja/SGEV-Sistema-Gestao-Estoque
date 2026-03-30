const express = require('express');
const connectDB = require('./configs/db');
require('dotenv').config();

const app = express();

// Ligar o motor do Banco de Dados
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});