require('dotenv').config()
const path = require('path')
const express = require('express')
const routes = require('./routes/routes')
const app = express()

// CONFIGURAÇÃO DO EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname + '/views'))

// CONFIGURAÇÃO DOS ARQUIVOS ESTÁTICOS DA PÁGINA CSS E JS
app.use(express.static(path.resolve(__dirname, 'public')))

// CONFIGURAÇÃO DO BOOTSTRAP
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/jquery/dist')))

// CONFIGURAÇÃO PARA PERMITIR ENVIO DE PARÂMETROS NO CORPO DA REQUISIÇÃO
app.use(
    express.urlencoded(
        {
            extended:true
        }
    )
)



// CONFIGURAÇÃO DAS ROTAS
app.use('/', routes)

module.exports = app