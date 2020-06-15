require('dotenv').config();
import express = require('express');
import compression = require('compression');
import cors = require('cors')
import bodyParser = require('body-parser')
import { fetchData } from '../workers/run-workers';
import { executeWorkers } from '../workers';
import { IndexRouter } from './controllers/v0/index.router';

(async () => {
  try {
    const app = express();
    const port = process.env.PORT || 8200; // default port to listen
    app.use(compression());
    app.use(cors());
    app.use(bodyParser());    
    app.use('/', IndexRouter);

    // Start the Server
    app.listen(port, async() => {
      fetchData();
      console.log(`server running on ${port}`);
      console.log('press CTRL+C to stop server');
    });
  } catch(err) {
    console.log(err);
    if(err) {
      return err;
    }
  }

})();
