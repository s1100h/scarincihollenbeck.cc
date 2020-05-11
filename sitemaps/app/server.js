const express = require('express');
const compression = require('compression');
const cors = require('cors');
const path = require('path');
const CronJob = require('cron').CronJob;
const getSiteLinks = require('./sitemap-generator.js');

(async () => {
  try {
    const app = express();
    const port = process.env.PORT || 8700; // default port to listen
    app.use(compression());
    app.use(cors());

    app.get('/sitemap.xml', async (_, res) => {
       res.contentType('application/xml');
       res.sendFile(path.join(__dirname , 'sitemap.xml'));
    });

    
    const job = new CronJob('0 23 * * 0 ', function() {
      getSiteLinks();
    }, null, true, 'America/New_York');

    // start server
    app.listen(port, () => {
      job.start();
      console.log('/sitemap.xml running');
      console.log(`server running on ${port}`);
      console.log('press CTRL+C to stop server');
    });


  } catch(err) {
    console.log(err);
    return err;
  }
})();