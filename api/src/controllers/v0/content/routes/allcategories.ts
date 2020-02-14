import {
  Router, Request, Response,
} from 'express';
import { getAsync, parseResults } from '../redis.utils';

// set up express router
const router: Router = Router();

router.get('/blog-categories', async (req: Request, res: Response) => {
  try {
    const blogCategories = await getAsync('blogCategories');

    // parse strings to JSON objects
    const parsedCategories = parseResults(blogCategories);
    
    // store results
    const results:any = [];

    // push formatted results to response results array
    await parsedCategories.forEach((post: any) => results.push(post));

    if (results.length > 0) {
      res.status(200).send(results);
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

export const AllCategories: Router = router;