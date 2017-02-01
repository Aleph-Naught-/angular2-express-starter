import {Router, Response, Request} from 'express';
import { connectString, connectPort } from '../config';
import forEachChild = ts.forEachChild;

const dbRouter: Router = Router();

const cradle = require('cradle');
const db = new (cradle.Connection)(connectString, connectPort,
  {
    cache: false,
    request: {
      'headers' : 'Origin:localhost'
    }
  }).database('books');

dbRouter.get('/document', (request: Request, response: Response) => {
  db.get('Art of War', function (err, doc) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send(doc);
  });
});

dbRouter.get('/all', (request: Request, response: Response) => {
  db.view('books/all', function (err, res) {
    //Surprisingly, even though the DB responds with the correct CORS headers
    //The express Response strips most of them.
    response.setHeader('Access-Control-Allow-Origin', '*');

    response.send(res);
  });
});

export {dbRouter}
