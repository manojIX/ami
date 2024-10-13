const express = require("express");
const app = express();

const {SERVICE} = process.env;

if(SERVICE==='order'){
  app.get('/order',(req,res)=>{res.send('you have reached ordering microservice')})
}

if(SERVICE==='product'){
  app.get('/product',(req,res)=>{res.send('you have reached product microservice')})
}

if(SERVICE==='user'){
  app.get('/user',(req,res)=>{res.send('you have reached user microservice')})
}

app.get('/',(req,res)=>{res.send( 'konichiwa')})

app.listen(8080, () => {
  console.log("server started");
});
