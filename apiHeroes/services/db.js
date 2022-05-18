const mysql=require('mysql2/promise');
const config = require('../config/config');
async function query(sql){
    //async se ejecuta posterior a la llamda y puede durar tiempo determinado
    //await es la forma de poner en espera un resultado asincrono
    const connection = await mysql.createConnection(config.db);
    const [results,] = await connection.execute(sql);

    return results;
}
//exportar para compartir el query.
module.exports={
    query
}