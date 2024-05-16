require('dotenv').config()
const path = require('path')
const express = require('express')
const routes = require('./routes/routes')
const app = express()

// CONFIGURAÇÃO DO EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname + '/views'))

// CONFIGURAÇÃO PARA PERMITIR ENVIO DE PARÂMETROS NO CORPO DA REQUISIÇÃO
app.use(
    express.urlencoded(
        {
            extended:true
        }
    )
)

// CONFIGURAÇÃO DOS ARQUIVOS ESTÁTICOS DA PÁGINA CSS E JS
app.use(express.static(path.resolve(__dirname, 'public')))

// CONFIGURAÇÃO DAS ROTAS
app.use('/', routes)

module.exports = app