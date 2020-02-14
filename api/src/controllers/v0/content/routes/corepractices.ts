import {
  Router, Request, Response,
} from 'express';
import { getAsync, parseResults } from '../redis.utils';

// set up express router
const router: Router = Router();

router.get('/core-practices', async (req: Request, res: Response) => {
  try {
    const practices = await getAsync('corePractices');

    // parse strings to JSON objects
    const parsedPractices = parseResults(practices);
    
    // store results
    const results:any = [];

    // push formatted results to response results array
    await parsedPractices.forEach((post: any) => results.push(post));

    const sortedResults = await results.sort((a: any, b: any) => {
      return a.title.localeCompare( b.title );
    });


    if (results.length > 0) {
      res.status(200).send(sortedResults);
    }

    if (results.length < 0) {
      res.status(400).send({ message: 'Sorry, no articles were found' });
    }
  } catch (err) {
    if (err) {
      res.status(400).send(err);
    }
  }
});

export const CorePracticesRouter: Router = router;