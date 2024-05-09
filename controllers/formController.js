exports.view = (req, res) => {
    res.render('form')
}

exports.post = (req,res) => {
    console.log("Função FormPost")
    res.send(req.query)
    res.send("Rota /form usando POST acessada")
}