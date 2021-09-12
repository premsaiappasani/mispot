//jshint esversion:6
const express = require("express");

const app = express();

app.use(express.json());



app.use(express.urlencoded({
  extended: true
}));


let arr=[0,0,0,0];
let brr=['bottle','pen','cell phone','hand'];
app.set('view engine', 'ejs');


app.get("/products",(req,res)=>{
    console.log("req recieved");
    res.sendFile(__dirname+"/sample.html");
});


app.post("/products",(req,res)=>{
    console.log("info recieved");
    let str=req.body.str;
    brr[1]=str;
    res.send("done");
});



app.post("/verify/:tagid",(req,res)=>{
    console.log("Verification attempted");
    let id=req.params.tagid;
    //res.render("/sample.html",{id,str});
    res.send("done!"); 
});


app.get("/verify/:tagid",(req,res)=>{
    let id=req.params.tagid;
    let id2=parseInt(id);
    let str=brr[id2];
    let obj={id,str};
    res.render('home',obj);
});


app.get("/success",(req,res)=>{
    console.log("Verification Success");
    res.sendFile(__dirname+"#");
});





app.post("/", (req,res)=>{
    let n1= parseInt(req.body.n1);
    let n2= parseInt(req.body.n2);
    let n3=(n1/n2);
    n3/=n2;
    n3*=10000;
    n3=n3.toFixed(3);
    console.log(n3);
    res.send("BMI "+n3);
});
app.listen(8080,()=>{
    console.log("Hello World")
});