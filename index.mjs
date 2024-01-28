import express from "express";
import http from 'http';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let helloMessage = "hello server";
app.get('/hello',(req,res)=>{
  res.send(helloMessage);
});

app.get('/id',(req,res)=>{
  res.send("123456");
});

app.post('/post-hello',(req,res)=>{
  if(req.body.message){
    helloMessage = req.body.message;
    res.send("OK:"+helloMessage);
  }else{
    res.send("ERROR");
  }
});

let counter = 0;
app.get('/countup',(req,res)=>{
  counter ++;
  res.send(""+counter);
});

const webServer = http.createServer(app);
webServer.listen(3000,()=>{
  console.log("server running PORT:"+3000);
});
