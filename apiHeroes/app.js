const express = require('express')//invoca el express ya intslada
const app = express()
const port = 3008//puerto
const heroesRouter=require('./routers/heroes');

//codigo traido de repositorio gitClass
const DOMINIO_PERMITIDO_CORS = "http://localhost:4200";
app.use((req, res, next) => {
  res.set("Access-Control-Allow-Credentials", "true");
  res.set("Access-Control-Allow-Origin", DOMINIO_PERMITIDO_CORS);
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Access-Control-Allow-Methods", "DELETE");
  next();
});
app.use(express.json());

app.use(express.urlencoded({
    extended:true,
})
);
app.get('/', (req, res) => {
  res.json({message: "ok"});
});

app.use("/api/heroes",heroesRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})