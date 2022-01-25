const express = require("express");
const app = express();

//setando o EJS como view engine
app.set('view engine', 'ejs');

app.get("/",(req,res) => {
var nome = "Lucas Marinho";
var lang = "JavaScript"
var exibirmsg = true;

var produtos = [
      {nome: "Doritos", preco: 3.5},
      {nome: "Coca", preco: 5},
      {nome: "Leite", preco: 4},
      {nome: "Carne", preco: 30},
      {nome: "Nescau", preco: 8.5}
]


   res.render("index",{
      nome: nome,
      lang: lang,
      empresa: "Teste",
      inscritos: 8000,
      msg: exibirmsg,
      produtos: produtos 
   });
});

app.listen(8080,()=>{console.log("App rodando!!")});
