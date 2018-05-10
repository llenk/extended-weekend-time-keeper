var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var entryRouter = require('./routes/entry.route');

var port = process.env.PORT || 5000;

app.use(express.static('server/public'));
app.use(bodyParser.json());

app.use('/entry', entryRouter);


app.listen(port, function(){
    console.log('listening on port', port);  
});