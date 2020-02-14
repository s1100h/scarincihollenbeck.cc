require('dotenv').config();
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { IndexRouter } from './controllers/v0/index.router';

(async () => {

  const app = express();
  const port = process.env.PORT || 8086; // default port to listen
  
  app.use(cors());
  app.use(bodyParser());
  app.use('/', IndexRouter);


  // Root URI call
  app.get('/', async (req, res) => {
    res.send('/cached/');
  });


  // Start the Server
  app.listen(port, () => {
    console.log('/cached api running');
    console.log(`server running on ${port}`);
    console.log('press CTRL+C to stop server');
  });
})();