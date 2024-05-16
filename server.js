const app = require('./app')

// ESCUTA O SERVIDOR
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log('Servidor Executando')
    console.log('Porta: ', PORT)
    console.log('URL: ','http://localhost:' + PORT)
})