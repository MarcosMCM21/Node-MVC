const express = require('express')
const routes = require('./routes/routes')
const app = express()

// CONFIGURAÇÃO DO EJS
app.set('view engine', 'ejs')
app.set('views', './views')

// CONFIGURAÇÃO PARA PERMITIR ENVIO DE PARÂMETROS NO CORPO DA REQUISIÇÃO
app.use(
    express.urlencoded(
        {
            extended:true
        }
    )
)

// CONFIGURAÇÃO DOS ARQUIVOS ESTÁTICOS DA PÁGINA CSS E JS
app.use(express.static('./public'));

// CONFIGURAÇÃO DAS ROTAS
app.use('/', routes)

// ESCUTA O SERVIDOR
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Servidor Executando')
    console.log('Porta: ', PORT)
    console.log('URL: ','http://localhost:' + PORT)
})
