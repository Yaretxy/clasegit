const conexion = require("../confings/dbconfing");
module.exports = {
    async obtener() {
        const result=await db.query(`SELECT * FROM prueba_mascotas`);
        return result;       
}
}