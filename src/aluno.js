import conexao from './banco.js';

/* FUNÇÕES PARA O CRUD */
// Função para exibir todos os alunos do banco
function ler(res){

    // Comando SQL a ser executado
    const sql = "SELECT * FROM alunos ORDER BY nome";

    // Executando a query a partir da conexão
    conexao.query(sql, (erro, resultados) => {

        // checando se há conteúdo
        if(resultados === 0){
            res.status(204).end();
            return; // forçar a interrupção do código
        }

        // Verficação básica de erro
        if(erro){
            // Se erro, exibir status 400 e informar qual foi o erro
            res.status(400).json(erro.code);
        } else {
            // se der certo apresenta o status 200 e exibe o resultado (no formato JSON)
            res.status(200).json(resultados);
        }

    });
}


// Função para cadastrar alunos no banco
function inserir(aluno, res) {
    const sql = "INSERT INTO alunos SET ?";

    conexao.query(sql, aluno, (erro) => {
        if(erro){
            res.status(400).json(erro.code);
        } else {
            res.status(201).json({"status" : "aluno inserido!"});
        }
    });
}

// Função para exibir UM aluno
function lerUm(id, res){
    const sql = "SELECT * FROM alunos WHERE id = ?";

    conexao.query(sql, id, (erro, resultados) => {

        // checando se há conteúdo
        if(resultados === 0){
            res.status(204).end();
            return; // forçar a interrupção do código
        }

        // If para erro ou resultado
        if(erro){
            res.status(400).json(erro.code);
        } else {
            res.status(200).json(resultados[0]);
        }
    });
}


// Função que exclui um aluno
function excluir(id, res) {
    const sql = "DELETE FROM alunos WHERE id = ?";

    conexao.query(sql, id, (erro, resultados) => {
        if(erro){
            res.status(400).json(erro.code);
        } else {
            res.status(200).json({"status" : "Aluno excluído", id});
        }
    });
}


// Função para atualizar dados de alunos
function atualizar(id, aluno, res){
    const sql = "UPDATE alunos SET ? WHERE id = ?";

    conexao.query(sql, [aluno, id], (erro, resultados) => {
        if(erro){
            res.status(400).json(erro.code);
        } else {

            // ... reticências é chamado spread operator (operador de espalhamento de objeto)
            res.status(200).json({...aluno, id});
        }
    });
}

export { ler, inserir, lerUm, excluir, atualizar };