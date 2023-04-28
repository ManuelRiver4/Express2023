var express = require('express');
var app = express();

app.get('/', function(req, res){
res.send('Una API basica desde Express');

});

app.get('/saludo', function(req, res){
    res.send('Hola desde la API');
    
    });

app.listen(3000, function(){
console.log('Adios desde una API')

});

