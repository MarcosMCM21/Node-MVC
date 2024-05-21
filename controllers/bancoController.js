const db = require('../models/bancoModel')

exports.view = async (req, res) => {
    dados = await db.pessoaGetAll()
    res.render('banco', dados)
}