const express = require("express");
const app = express();

//setando o EJS como view engine
app.set('view engine', 'ejs');

app.get("/",(req,res) => {
var nome = "Lucas Marinho";
var lang = "JavaScript"

   res.render("index",{
      nome: nome,
      lang: lang,
      empresa: "Teste",
      inscritos: 8000
   });
});

app.listen(8080,()=>{console.log("App rodando!!")});
