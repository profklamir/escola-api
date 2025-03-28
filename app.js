import express from 'express';
import { ler } from './src/aluno.js';

const app = express();
const porta = 3000;

/* CONFIGURANDO ROTAS */

// raiz da API
app.get('/', (req, res) => {
    res.send(`API utilizando Node.js, Express e MySQL`);
});

// Exibindo TODOS os alunos
app.get('/alunos', (req, res) => {
    // res.send(`Exibindo todos os alunos`);
    ler(res);
});

// Exibindo UM aluno
app.get('/alunos/:id', (req, res) => {
    res.send(`Exibindo dados de UM aluno`);
});

// INSERINDO/CADASTRANDO/ADICIONANDO um aluno
app.post('/alunos', (req, res) => {
    res.send(`INSERINDO um aluno`);
});

// // ATUALIZANDO aluno
// app.put('/alunos/:id', (req, res) => {
//     res.send(`Atualizando dados do aluno`);
// });

// ATUALIZANDO aluno
app.patch('/alunos/:id', (req, res) => {
    res.send(`Atualizando dados do aluno`);
});

// EXCLUINDO aluno
app.delete('/alunos/:id', (req, res) => {
    res.send(`Aluno excluído com sucesso!`);
});

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});