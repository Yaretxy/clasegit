const db  = require("./db");
const helper  = require("../helper");
const config  = require("../config/config");

async function getMultiple(page =1){
    const Offset=helper.getOffset(page,config.listPerPage);
    
    const rows=await db.query(`SELECT id, name FROM heroes LIMIT ${Offset},${config.listPerPage}`);
    
    const data = helper.emptyOrRows(rows);
    //const meta = (page);
    return data;
    }

    async function getByID(id=1){
       // const Offset=helper.getOffset(page,config.listPerPage);
        
        const rows=await db.query(`SELECT id, name FROM heroes WHERE id=${id}`);
        
        const data = helper.emptyOrRows(rows);
        //const meta = (page);
        return data[0];
        }

    async function create(heroe){
        const result= await db.query(`INSERT INTO heroes(name) 
        VALUES ("${heroe.name}")`);
          
            let message = 'Error en crear tabla';
            if(result.affectedRows){
                message='se creo correctamemte';
            }
            return message;
    }

    async function update(id,heroe){
        const result= await db.query(`UPDATE heroes SET 
            name ="${heroe.name}" WHERE id=${id})`);
            let message = 'Error en modificar heroes';
            if(result.affectedRows){
                message='se modifico correctamemte';
            }
            return message;
    
        
    }

    async function remove(id){
        const result= await db.query(`DELETE FROM heroes WHERE id=${id}`);
        let message = 'Error al eliminar el heroes';
            if(result.affectedRows){
                message='se elimino correctamemte';
            }
            return message;
    
            
        
    
    }

    module.exports={getMultiple,create,update,remove,getByID};
    

