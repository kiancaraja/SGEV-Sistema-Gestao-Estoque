const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("✅ Shark, o banco de dados SGEV conectou com sucesso!");
    } catch (error) {
        console.error("❌ Erro ao conectar ao banco:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;