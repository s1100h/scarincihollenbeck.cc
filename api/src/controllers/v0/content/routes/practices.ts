import {
  Router, Request, Response,
} from 'express';
import { getAsync, parseResults } from '../redis.utils';

// set up express router
const router: Router = Router();

router.get('/practice-page', async (req: Request, res: Response) => {
  try {
    const practicePage = await getAsync('practicePage');

    // // parse strings to JSON objects
    const parsedPracticePage = parseResults(practicePage);
    
    if (Object.keys(parsedPracticePage).length > 0) {
      res.status(200).send(parsedPracticePage);
    }

    if (Object.keys(parsedPracticePage).length < 0) {
      res.status(400).send({ message: 'Sorry, no articles were found' });
    }
  } catch (err) {
    if (err) {
      res.status(400).send(err);
    }
  }
});

export const PracticePageRouter: Router = router;