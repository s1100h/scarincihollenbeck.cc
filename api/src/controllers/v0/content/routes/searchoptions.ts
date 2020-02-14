import {
  Router, Request, Response,
} from 'express';
import { getAsync, parseResults } from '../redis.utils';

// set up express router
const router: Router = Router();

const responseObject = (obj: any) => {
  return {
    title: obj.title || obj.name
  }
}

router.get('/search-options', async (req: Request, res: Response) => {
  try {
    
    const blogCategories = await getAsync('blogCategories');
    const attorneyPractice = await getAsync('attorneyPractices');
    const attorneysList = await getAsync('attorneyList');

    // parse strings to JSON objects
    const parsedCategories = parseResults(blogCategories);
    const parsedPractice = parseResults(attorneyPractice);
    const parsedAttorneys = parseResults(attorneysList);

    // store results
    let results:any = {};

    // push formatted results to response results array
    const categories = await parsedCategories.map((post: any) => responseObject(post));
    const attorneys = await parsedAttorneys.map((post: any) => responseObject(post));
    const practices= await parsedPractice.map((post: any) => responseObject(post));

    results = {
      categories,
      attorneys,
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

export const SearchOptionsRouter: Router = router;