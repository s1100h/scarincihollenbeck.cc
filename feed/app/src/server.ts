/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Parser = require('rss-parser');

const port = 8100;
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.json({ type: 'application/vnd.api+json', limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));


// sort and parse results
async function parseFeedResults(feed: any, sourceUrl: string, source: string = null) {
  const results:any = [];

  // check if the source is asbury park press
  feed.items.forEach(async (post: { title: string; link: string; pubDate: any; string: any; isoDate: any; author: string; content: string; }) => {
    const {
      title, link, pubDate, isoDate, content,
    } = post;

    if (content.indexOf('pandemic') > -1 || content.indexOf('COVID-19') > -1 || content.indexOf('Corona') > -1) {
      // push results into array
      await results.push({
        title,
        link,
        pubDate,
        isoDate,
        source: sourceUrl,
      });
    }
  });


  return results;
}


// filter for covid-19 or corona virus terms
app.get('/', async (req: any, res: any) => {
  res.send('Please visit endpoint /covid-19-news');
});

app.get('/covid-19-news', async (req: any, res: { send: (arg0: { message: string; sendStatus: any; }) => void; }) => {
  try {
    const parser = new Parser();


    // parse through njBiz Government section
    const njBizGovFeed = await parser.parseURL('https://njbiz.com/feed/?cat=275');
    const njBizGovUrl = '<a href="https://njbiz.com/government/">NJBIZ - Government</a>';
    const parsedNjBizGov = await parseFeedResults(njBizGovFeed, njBizGovUrl);

    // parse through njBiz Health section
    const njBizHealthFeed = await parser.parseURL('https://njbiz.com/feed/?cat=420');
    const njBizHealthUrl = '<a href="https://njbiz.com/health-care/">NJBIZ - Health Care</a>';
    const parsedNjBizHealth = await parseFeedResults(njBizHealthFeed, njBizHealthUrl);

    // North Jersey health
    const northJerseyHealthFeed = await parser.parseURL('http://rssfeeds.northjersey.com/northjerseyhealth&x=1');
    const northJerseyHealthUrl = '<a href="http://rssfeeds.northjersey.com/northjerseybusiness">NorthJersey.com - Health</a>';
    const parseNorthJerseyHealth = await parseFeedResults(northJerseyHealthFeed, northJerseyHealthUrl);

    // North Jersey health
    const asburyParkPressFeed = await parser.parseURL('http://rssfeeds.app.com/asburypark/home');
    const asburyParkPressUrl = '<a href="https://www.app.com">Asbury Park Press</a>';
    const parseAsburyParkPress = await parseFeedResults(asburyParkPressFeed, asburyParkPressUrl, 'app');

    // observer
    const observerPressFeed = await parser.parseURL('https://observer.com/feed');
    const observerUrl = '<a href="https://observer.com">Observer.com</a>';
    const parsedObserver = await parseFeedResults(observerPressFeed, observerUrl);

    // observer
    const roiNJPressFeed = await parser.parseURL('https://www.roi-nj.com/feed');
    const roiNJUrl = '<a href="https://observer.com">ROI-NJ.com</a>';
    const parsedRoiNJ = await parseFeedResults(roiNJPressFeed, roiNJUrl);


    const feed: any = [
      ...parsedNjBizGov,
      ...parsedNjBizHealth,
      ...parseNorthJerseyHealth,
      ...parseAsburyParkPress,
      ...parsedObserver,
      ...parsedRoiNJ,
    ];

    // sort feed articles by date
    await feed.sort((a: any, b: any) => {
      const dateA: any = new Date(a.isoDate);
      const dateB: any = new Date(b.isoDate);
      return dateB - dateA;
    });


    if (feed.length > 0) {      
      res.send(feed);
    }
  } catch (err) {
    if (err) {
      res.send(err);
    }
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
