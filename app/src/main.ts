//import * as fs from 'fs'; //
//import { renderModuleFactory } from '@angular/platform-server';
//import { AppServerModuleNgFactory } from './aot/src/app/app.server.module.ngfactory';
const portNb : number = 3000;

let express = require('express');
let app = express();
app.use(express.static('./clientCode/dist/dlk-app'))
 
/** const ngEngine = (filePath, options, callback) => { //
    const file = fs.readFileSync(filePath).toString();
    renderModuleFactory(AppServerModuleNgFactory, {
      document: file,
      url: options.req.url
    })
    .then(string => {
      callback(null, string);
    });
  };
   
  app.engine('html', ngEngine);

app.get('*', (request, response) => { //
    response.render('index', { req: request });
  });   */

app.listen(portNb);
