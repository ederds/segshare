'use strict';

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const seguros = require('./seguros.js')

const credencial = "c8b38ac31294319ae0fc3bec9dc2c21306b8727f";
const chave = "0bf173c519d9238b9c092fb4e8ca4b7dc6d8f4ff";

const PJBankSDK = require('@pjbank/pjbank-js-sdk');
const PJBank = new PJBankSDK(credencial, chave);
const logo = 'https://image.ibb.co/fMNMMR/9aa6aa4a_8f93_4690_b4e1_77cd8d71b972.png';

app.set('view engine', 'ejs');
app.use(bodyParser.json())

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/cadastrar', function(req, res) {
	seguros.cadastrar();
	res.render('view/cadastrar');
	$(document).ready(function(){
		$('.collapsible').collapsible();
	  });
})

app.get('/faturar', function(req, res) {
	let dados = seguros.consolidar()

	PJBank.boleto({
	    'nome_cliente' : dados.seguradoNome,
	    'cpf_cliente' :  dados.seguradoCpf,
	    'valor' : 135.25,
	    'vencimento' : "12/30/2019",
	    'texto' : '-Uso servico personal de 91% \n Uso buiseness 9%',
	    'logo_url' : logo
	}).then((boleto) => {
		res.redirect( boleto.linkBoleto );
    }).catch((err) => {
        console.log(boleto);
    });
})

app.get('/index', function(req, res) {
	res.render('view/index');
})