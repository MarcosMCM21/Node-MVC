const connection = require('../config/connection')

exports.getAll = async () => {
    try {
        const sql = 'SELECT * FROM teste';
        const [rows, fields] = await connection.execute(sql);

        return rows
    } catch (err) {
        console.log(err);
    }
}

exports.insert = async (dado) => {
    try {
        const sql = 'INSERT INTO teste VALUES(?)';
        const values = [dado];
      
        const [result, fields] = await connection.execute(sql, values);
    } catch (err) {
        console.log(err);
    }
}