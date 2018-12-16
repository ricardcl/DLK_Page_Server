const portNb : number = 3000;

let express = require('express');
let app = express();
app.use(express.static('./clientCode/dist/dlk-app'))

app.listen(portNb);
