const express = require ("express")
const app=express()
const middlewareJSON=express.json()
app.use(middlewareJSON)
app.get("/somar",function(req,res){
    let valorUm = req.body.valorUm;
    let valorDois = req.body.valorDois;
    let soma = valorUm+valorDois;
    res.send({soma})
})
app.get("/subtrair",function(req,res){
    let valorUm = req.body.valorUm;
    let valorDois = req.body.valorDois;
    let subtracao = valorUm-valorDois;
    res.send({subtracao})
})
app.get("/multiplicar",function(req,res){
    let valorUm = req.body.valorUm;
    let valorDois = req.body.valorDois;
    let multiplicar = valorUm*valorDois;
    res.send({multiplicar})
})
app.get("/dividir",function(req,res){
    let valorUm = req.body.valorUm;
    let valorDois = req.body.valorDois;
    let divisao = valorUm/valorDois;
    res.send({divisao})
})

const porta = 3300
module.exports=app
app.listen(porta,function(){
    console.log(`a aplicação esta rodando na porta ${porta}`)
})