import { Router, Request, Response } from 'express';
import { getAsync, parseResults } from '../redis.utils';

// set up express router
const router: Router = Router();

const responseObject = (obj: any) => {
  const { ID, title, link, image } = obj;
  
  return {
    ID,
    title,
    link,
    image
  };
}

router.get('/latest-articles', async (req: Request, res: Response) => {
  try {

    // redis keys
    const firmNewsKey = await getAsync('firmNews');
    const firmEventsKey = await getAsync('firmEvents');
    const firmInsightsKey = await getAsync('firmInsights');

    // parse strings to JSON objects
    const parsedFirmNews = parseResults(firmNewsKey);
    const parsedFirmEvents = parseResults(firmEventsKey);
    const parsedFirmInsights = parseResults(firmInsightsKey);

    // push formatted results to response results array
    const firmNewsMain = await parsedFirmNews.main.map((post: any) => responseObject(post));
    const firmNewsLatest = await parsedFirmNews.latest.map((post: any) => responseObject(post));
    const firmEventsMain = await parsedFirmEvents.main.map((post: any) => responseObject(post));
    const firmEventsLatest = await parsedFirmEvents.latest.map((post: any) => responseObject(post));
    const firmInsightsMain = await parsedFirmInsights.main.map((post: any) => responseObject(post));
    const firmInsightsLatest = await parsedFirmInsights.latest.map((post: any) => responseObject(post));

    const results: any ={
      firmNews : [
         ...firmNewsMain,
        ...firmNewsLatest
      ],
      firmEvents : [
        ...firmEventsMain,
        ...firmEventsLatest
      ],
      firmInsights: [
        ...firmInsightsMain,
        ...firmInsightsLatest
      ]
    }
    // results = {
    //   
    //   firmEvents : [
    //     ...firmEventsMain,
    //     ...firmEventsLatest
    //   ],
    //   
    // }; 
    
  res.send(results);

  } catch (err) {
    res.status(400).send({
      'error': err
    });
  }
});

export const LatestArticlesRouter: Router = router;