const express = require("express"); // chama a dependência express e armazena na constante "express"
const app = express();              // simplificando o nome da função

app.use(express.json());            // função que "lê" o json - não inclusa na dependencia express 

app.listen(8080, () => {
    console.log("O servidor está ativo na porta 8080");
})

let Alunos = ['Maria', 'João', 'José'];

// CREATE
app.post('/includeAluno', (req, res) => {
    const { nome } = req.body;
    Alunos.push(nome);
    res.send(`<h1>Olá ${nome}, cê tá bão?</h1>`);
})

// READ
app.get('/getAluno', (req, res) => {
    const { index } = req.body;
    // connect SQL - 
    // SELECT * FROM Alunos WHERE id = index
    res.send(`<h1>O aluno ${Alunos[index]} foi encontrado</h1>`);
})

// READ
app.get('/getAlunos', (req, res) => {
    // SELECT * FROM Alunos
    console.log(Alunos);
    res.send(`<h3>Todos os alunos cadastrados são ${Alunos}</h3>`);
})

// UPDATE
app.put('/updateAluno', (req, res) => {
    // UPDATE nome FROM Alunos WHERE id = index;
    const {index, nome} = req.body;
    Alunos[index] = nome;
    res.send(`<h1>O nome ${nome} foi atualizado com sucesso!!!</h1>`);
    console.log(Alunos);
})

// DELETE
app.delete('/deleteAluno', (req, res) => {
    // DELETE FROM Alunos WHERE id = index;
    const { index } = req.body;
    Alunos.splice(index, 1);
    console.log(Alunos);
})

/*
npm init -y => cria package.json
npm i express nodemon
adicionar "start": "nodemon index.js" dentro de "script" dentro do arquivo package.json
npm start
*/