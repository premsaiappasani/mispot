//jshint esversion:6
const express = require("express");

const app = express();

app.use(express.json());

let gi=5;

app.use(express.urlencoded({
  extended: true
}));


let arr=[0,0,0,0];
let brr=['bottle','book','teddy bear','backpack'];
app.set('view engine', 'ejs');


app.get("/home",(req,res)=>{
    res.render('home',{arr,brr,gi});
});



app.get("/products",(req,res)=>{
    console.log("req recieved");
    let obj={arr,brr,gi};
    res.render("products",obj);
});


app.post("/verify/:tagid",(req,res)=>{
    let id=req.params.tagid;
    //res.render("/sample.html",{id,str});
    arr[id]=1;
    let score=parseInt(req.body.score);
    brr[id]=score;
    gi++;
    res.redirect('http://localhost:8080/products/');
});



app.get("/verify/:tagid",(req,res)=>{
    let id=req.params.tagid;
    let id2=parseInt(id);
    let str=brr[id2];
    let obj={id,str,gi};
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