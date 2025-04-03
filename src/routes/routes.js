import { ler, inserir, lerUm, excluir, atualizar} from '../aluno.js';

export const routes = [
    {
        // raiz da API
        method: "get",
        path: "/",
        handler: (req, res) => {
            res.send(`API utilizando Node.js, Express e MySQL`);
        }
    },
    {
        // Exibindo TODOS os alunos
        method: "get",
        path: '/alunos',
        handler: (req, res) => {
            // res.send(`Exibindo todos os alunos`);
            ler(res);
        }
    },
    {    // Exibindo UM aluno
        method: "get",
        path: '/alunos/:id',
        handler: (req, res) => {
            // res.send(`Exibindo dados de UM aluno`);

            // capturando o ID que vem do endpoint
            const id = parseInt(req.params.id);

            // chamando a função
            lerUm(id, res);
        }
    },
    {
        method: "post",
        path: '/alunos',
        handler: (req, res) => {
            // res.send(`INSERINDO um aluno`);

            // capturando os dados a partir do corpo da requisição
            const novoAluno = req.body;

            // executando a função inserir e passando os parâmetro novoAluno e res
            inserir(novoAluno, res);
        }
    },

    {    // ATUALIZANDO aluno
        method: "patch",
        path: '/alunos/:id',
        handler: (req, res) => {
            // res.send(`Atualizando dados do aluno`);

            // capturar id
            const id = parseInt(req.params.id);

            // pegando as informações do body
            const aluno = req.body;

            atualizar(id, aluno, res);
        }
    },
    {
        // EXCLUINDO aluno
        method: "delete",
        path: '/alunos/:id',
        handler: (req, res) => {
            // res.send(`Aluno excluído com sucesso!`);

            // capturando o id
            const id = parseInt(req.params.id);

            excluir(id, res);

        }
    }

]