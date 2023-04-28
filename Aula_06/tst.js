const express = require("express");

const app = express();

app.use(express.json());

app.listen(8080, ()=>{
    console.log("O servidor esta ativo na porta 8080");
})

let Alunos = ['Maria','Joao','José'];
//CREATE
app.post('/includeAluno', (req,res) => {
    const{nome} = req.body;
    Alunos.push(nome);
    res.send(`<h1> Ola ${nome}`);
});
//READ
app.get('/getAluno', (req, res) =>{
    const{index} = req.body;
    res.send(`<h1> O aluno ${Alunos [index]} foi encontrado</h1>`);
});
app.get('/getAlunos', (req, res) =>{
    console.log(Alunos);
    res.send(`<h1> Todos os alunos cadastrados são: ${Alunos}`);
});

// UPDATE
app.put('/updateAluno', (req, res) =>{
    //UPDATE nome FROM Alunos WHERE id = index
    const {index, nome} = req.body;
    Alunos[index] = nome;
    res.send("<h1> O nome foi atualizado com sucesso </h1>");
});