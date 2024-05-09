const express = require('express')
// CONTROLLERS
const formController = require('./controllers/formController')
const homeController = require('./controllers/homeController')

// ROTAS
const route = express.Router()

route.get('/', homeController.view)

route.get('/rota2',(req, res) => {
    res.send('rota2')
})

route.get('/form', formController.view)

route.post('/form', formController.post)

route.get('/comparametros/:nome?/:sobrenome?',(req, res) => {
    res.send('rota com parametros')
    console.log(req.params)
})

route.get('/comquery', (req, res) => {
    console.log(req.query)
    res.send(req.params)
})

module.exports = route