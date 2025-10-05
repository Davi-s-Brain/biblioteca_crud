const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001; // Vercel vai gerenciar a porta

// Middleware para parsear JSON
app.use(express.json());

// Rota de teste
app.get("/api", (req, res) => {
  res.send("Bem-vindo à API da Biblioteca!");
});

// Futuras rotas para livros (exemplo)
// app.use('/api/books', require('./routes/books'));

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Exporta o app para a Vercel
module.exports = app;
