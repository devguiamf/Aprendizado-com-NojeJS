const models = require('../models/models.js')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))
const axios = require('axios')
const cors = require('cors')

module.exports = {
    rotaRaiz,
    cursoGetById,
    cepGetById,
    moedasGetById,
    githubGetById,
    sabespGetById
}

function rotaRaiz(req, res) {
    console.log('Rota Raiz Encontrada!')
    res.json({Ola: 'Rota Raiz Encontrada!'})
}

function cursoGetById(req, res){
    const curso = req.params.cursoid
    console.log("Parametro esperado: " + curso)
    res.json({Message: 'Rota Consultar Cursos Encontrada!'})

    let leitura
    console.time(leitura)

    models.getByIdCurso(curso)

    console.timeEnd(leitura)
    console.log("== Curso =============================")

}

function cepGetById(req, res) {
    const cep = req.params.cepid;
    console.log("Parametro esperado: " + cep);

    const url = `http://viacep.com.br/ws/`+cep+`/json/`
    console.log("Endereço: " + url)

    axios.get(url)
        .then((response) => console.log(response.data))
//        .then(response => console.log(dados))
        .catch(function (error){
            console.log("Erro na requisição!");
        })
        .finally(function(){
            console.log("Sempre apresenta está mensagem!")
        });

}

function moedasGetById(req, res){
    const moeda = req.params.moedasid;
    console.log("Parametro esperado: " + moeda);

    const url = ` https://economia.awesomeapi.com.br/last/`+moeda
    console.log("Endereço: " + url)

    //fetch(url)
    axios.get(url)
        .then((response) => console.log(response.data))
        // .then(data => {
        //     dados = data;
        //     res.json({message:dados})
        // })
        //.then(response => console.log(dados))
        .catch(function (error){
            console.log("Erro na requisição!");
        })
        .finally(function(){
            console.log("Sempre apresenta está mensagem!")
        });

}

function githubGetById(req, res){
    const git = req.params.perfilid;
    console.log("Parametro esperado: " + git);

    const url = `https://api.github.com/users/` + git;
    console.log(url)

    fetch(url)
        .then((response) => response.json())
        .then(data => {
            dados = data;
            res.json({message:dados})
        })
        .then(response => console.log(dados))
        .catch(function (error){
            console.log("Erro na requisição!");
        })
        .finally(function(){
            console.log("Sempre apresenta está mensagem!")
        });
}

function sabespGetById (req, res){
    const sabesp = req.params.dataid;
    console.log("Parametro esperado: " + sabesp);

    const url = `https://sabesp-api.herokuapp.com/` + sabesp;
    console.log(url)

    fetch(url)
        .then((response) => response.json())
        .then(data => {
            dados = data;
            res.json({message:dados})
        })
        .then(response => console.log(dados))
        .catch(function (error){
            console.log("Erro na requisição!");
        })
        .finally(function(){
            console.log("Sempre apresenta está mensagem!")
        });
}