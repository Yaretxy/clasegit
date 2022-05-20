const express = require('express')
const app = express()
const port = 3008;
//const router_adopcion= require('./routers/adopcion_router');
//const cors = require('cors');


app.get('/', (req, res) => {
  res.send('metodo get')
});
 app.post('/agregar', (req,res)=>{
   res.send('metodo post');
 });

 app.put('/editar', (req,res)=>{
  res.send('metodo editar');
});

app.delete('/eliminar', (req,res)=>{
  res.send('metodo eliminar');
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})