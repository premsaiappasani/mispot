const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    var img=req.img;
    




    res.send('Done loading!');
});
app.get('/explore',(req,res)=>{
    res.send('Done fetching!');
});

app.get('/api',(req,res)=>{
    res.send({qsn:"ans"});
});

app.listen(1111, ()=>{
    console.log('listening');
});