require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configuração da conexão com o MySQL
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Conecta ao MySQL
connection.connect((err) => {
    if (err) {
        console.error("Erro ao conectar ao MySQL:", err);
    } else {
        console.log("Conectado ao MySQL...");
    }
});

// Endpoint para cadastrar usuários
app.post("/api/users", (req, res) => {
    const { name, email } = req.body;
    const query = "INSERT INTO users (name, email) VALUES (?, ?)";
    connection.query(query, [name, email], (error, results) => {
        if (error) {
            console.error("Erro ao salvar usuário:", error);
            return res.status(500).send("Erro ao cadastrar usuário.");
        }
        res.status(201).send("Usuário cadastrado com sucesso!");
    });
});

// Endpoint para obter usuários
app.get("/api/users", (req, res) => {
    const query = "SELECT * FROM users";
    connection.query(query, (error, results) => {
        if (error) {
            console.error("Erro ao obter usuários:", error);
            return res.status(500).send("Erro ao obter usuários.");
        }
        res.status(200).json(results); // Retorna os usuários como JSON
    });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
