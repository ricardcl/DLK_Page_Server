/* -- Create a server to serve the angular app files to a client -- */

const portNb : number = 3000;

const path = require('path');
const express = require('express');
const app = express();

// Load all the files in dlk-app forder in order to sent them to a client :
app.use(express.static('./clientCode/dist/dlk-app')) ;
// Rooting : for any client request, send index.html file ie angular is going to manage the rooting :
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../clientCode/dist/dlk-app/index.html'));
});

// Start the server :
app.listen(portNb);
