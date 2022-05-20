const express = require('express');
const router = express.Router();
const adopcion = require('../model/adopcion_service');
router.get('/',async function(req,res,next){
    try {
        
    res.json(await adopcion.obtener(req.query)); 
    } catch (error) {
        console.log(`Error al obtener datos de mascotas`,error);
        next (error);
    }
});
module.exports= router;