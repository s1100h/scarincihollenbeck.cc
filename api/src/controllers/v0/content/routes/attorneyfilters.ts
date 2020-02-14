/**
 *  * https://scarincihollenbeck.com/wp-json/attorney-search/office-locations -> /attorney-filters (Pages: Archive Attorney, Page, QuickNews, Search, Single)
 * https://scarincihollenbeck.com/wp-json/attorney-search/designations -> /attorney-filters (Pages: Archive Attorney, Page, QuickNews, Search, Single)
 * https://scarincihollenbeck.com/wp-json/attorney-search/practices -> /attorney-filters (Pages: Archive Attorney, QuickNews, Search, Single)
 */

import {
  Router, Request, Response,
} from 'express';
import { getAsync, parseResults } from '../redis.utils';

// set up express router
const router: Router = Router();

const responseObject = (obj: any) => {
  return {
    id: obj.ID,
    title: obj.title,
    ...(obj.children && {children: obj.children})
  }
}

router.get('/attorney-filters', async (req: Request, res: Response) => {
  try {

    const attorneyLocation = await getAsync('attorneyLocation');
    const attorneyDesignation = await getAsync('attorneyDesignation');
    const attorneyPractices = await getAsync('attorneyPractices');

    // parse strings to JSON objects
    const parsedLocation = parseResults(attorneyLocation);
    const parsedDesignation = parseResults(attorneyDesignation);
    const parsedPractices = parseResults(attorneyPractices);

    // store results
    let results:any = {};

    // push formatted results to response results array
    const locations = await parsedLocation.map((post: any) => responseObject(post));
    const designations = await parsedDesignation.map((post: any) => responseObject(post));
    const practices= await parsedPractices.map((post: any) => responseObject(post));

    results = {
      locations,
      designations,
      practices
    };    

    
    if (Object.keys(results).length > 0) {
      res.status(200).send(results);
    }

    if (Object.keys(results).length < 0) {
      res.status(400).send({ message: 'Sorry, no articles were found' });
    }
  } catch (err) {
    if (err) {
      res.status(400).send(err);
    }
  }
});

export const AttorneyFilterRouter: Router = router;