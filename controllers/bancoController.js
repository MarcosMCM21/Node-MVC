const db = require('../models/bancoModel')

exports.view = async (req, res) => {
    dados = await db.getAll()
    res.render('banco', dados)
}