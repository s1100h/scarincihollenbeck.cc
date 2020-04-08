import {
  Router, Request, Response,
} from 'express';
import { getAsync, parseResults } from '../redis.utils';

// set up express router
const router: Router = Router();

const responseObject = (obj: any) => obj.title.rendered.replace('&#038;', '&');

router.get('/firm-pages', async (req: Request, res: Response) => {
  try {
    const pageList = await getAsync('pageList');

    // // parse strings to JSON objects
    const parsedPageList = parseResults(pageList);

    // store results
    const results:any = [];

    // push formatted results to response results array
    await parsedPageList.forEach((post: any) => results.push(responseObject(post)));
    
    if (parsedPageList.length > 0) {
      res.status(200).send(results);
    }

    if (parsedPageList.length < 0) {
      res.status(400).send({ message: 'Sorry, no articles were found' });
    }
  } catch (err) {
    if (err) {
      res.status(400).send(err);
    }
  }
});

export const FirmPageRouter: Router = router;