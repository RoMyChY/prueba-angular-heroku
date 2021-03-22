const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(_dirname + '/dist/nombre-proyecto'));
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/dist/nombre-proyecto/index.html'));
});
