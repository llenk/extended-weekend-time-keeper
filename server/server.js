var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('server/public'));
app.use(bodyParser.json());


app.listen(port, function(){
    console.log('listening on port', port);  
});