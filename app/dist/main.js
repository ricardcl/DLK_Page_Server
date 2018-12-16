var portNb = 3000;
var express = require('express');
var app = express();
app.use(express.static('./clientCode/dist/dlk-app'));
app.listen(portNb);
