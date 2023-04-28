const express = require('express');
const { pool } = require("./data/data");
const app = express ();
app.use(express.json());
app.listen(8080, () =>{
    console.log("O servidor esta ativo na porta 8080!!!");
});

app.get("/getUsers", async (req, res) =>{
    try {
        const client = await pool.connect();
        const { rows } = await client.query ("SELECT * FROM Users");
        console.table(rows);
        res.status(200).send(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro de conexão com o servidor");
    }
})
/*/app.post("/getUsers", async (req,res) => {
    try {
        newUser= {
            id:  req.body.id,
            nome: req.body.nome
        }
        const insert = await pool.connect();
        const {rowsInsert} = await insert.query(`INSERT INTO Users (id, nome) values (5,'Tulio'))`); 
        console.log(rowsInsert);
        const { rows } = await insert.query ("SELECT * FROM Users");
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro na conexao");
    }
})/*/
app.post('/getUsers/:name&:id', async (req, res) =>{
    try {
        const { name } = req.params;
        const client = await pool.connect();
        const {id}=req.params;
        const set = await client.query(`INSERT INTO Users (id, nome) VALUES (${id}, '${name}')`);
        const { rows } = await client.query ("SELECT * FROM Users");
        console.table(rows);
        res.status(200).send(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro de conexão com o servidor");
    }
});