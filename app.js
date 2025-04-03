import express from 'express';
import { routes } from './src/routes/routes.js';
import cors from 'cors';

const app = express();
const porta = process.env.PORT || 3000;

// habilitando para dar suporte ao formato JSON
app.use(express.json());

//Habilitando para dar suporte a dados inseridos a partir de inputs de formulário
app.use(express.urlencoded({extended:true}));


app.use(cors());

/* APLICANDO ROTAS */
routes.forEach(({method, path, handler})=>{
    app[method](path, handler);
});


app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});