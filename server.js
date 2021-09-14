//jshint esversion:6
const express = require("express");

const app = express();

app.use(express.json());



app.use(express.urlencoded({
  extended: true
}));


let arr=[0,0,0,0];
let brr=['bottle','book','teddy bear','backpack'];
app.set('view engine', 'ejs');


app.get("/home",(req,res)=>{
    res.render('home');
});


app.get("/products",(req,res)=>{
    console.log("req recieved");
    let obj={arr,brr};
    res.render("products",obj);
});


app.post("/verify/:tagid",(req,res)=>{
    console.log("Verification attempted");
    let id=req.params.tagid;
    //res.render("/sample.html",{id,str});
    arr[id]=1;
    res.redirect('http://localhost:8080/products/');
});



app.get("/verify/:tagid",(req,res)=>{
    let id=req.params.tagid;
    let id2=parseInt(id);
    let str=brr[id2];
    let obj={id,str};
    res.render('verify',obj);
});


app.get("/success",(req,res)=>{
    console.log("Verification Success");
    res.sendFile(__dirname+"#");
});



app.use(express.static('public'));


app.listen(8080,()=>{
    console.log("Listening");
});