import {
  Router, Request, Response,
} from 'express';
import { getAsync, parseResults } from '../redis.utils';

// set up express router
const router: Router = Router();

router.get('/administration-archives', async (req: Request, res: Response) => {
  try {
    const admins = await getAsync('adminArchive');

    // parse strings to JSON objects
    const parsedAdmins = parseResults(admins);
    
    // store results
    const results:any = [];

    // push formatted results to response results array
    await parsedAdmins.forEach((post: any) => results.push(post));

    if (results.length > 0) {
      res.status(201).send(results);
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

export const AdminRouter: Router = router;