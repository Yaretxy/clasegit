
const express=require('express');
const router=express.Router();
const heroes=require('../services/heroes');

router.get('/',async function(req,res,next){
    try{
        res.json(await heroes.getMultiple(req.query.page));
    }catch(err){
        console.error(`Error al obtener heroes`,err.message);
        next(err);
    }
});

router.get('/:id',async function(req,res,next){
    try{
        res.json(await heroes.getByID(req.params.id));
    }catch(err){
        console.error(`Error al obtener heroes`,err.message);
        next(err);
    }
});

router.post('/',async function(req,res,next){
    try {
        res.json(await heroes.create(req.body));
        
    } catch (error) {
        console.log(`Error mientras se creaba el registro`,err.message);
        next(err);
        
    }

});

router.put('/:id',async function(req,res,next){
    try {
        res.json(await heroes.update(req.id,req.body));
        
    } catch (error) {
        console.log(`Error modifico ell registro`,err.message);
        next(err);
        
    }

});

router.delete('/:id',async function(req,res,next){
    try {
        res.json(await heroes.delete(req.params.id,rer.body));
        
    } catch (error) {
        console.log(`Error modifico ell registro`,err.message);
        next(err);
        
    }

});

module.exports=router;



