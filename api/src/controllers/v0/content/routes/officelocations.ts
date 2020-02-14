import {
  Router, Request, Response,
} from 'express';
import { getAsync, parseResults } from '../redis.utils';

// set up express router
const router: Router = Router();

router.get('/office-locations', async (req: Request, res: Response) => {
  try {
    const officeLocations = await getAsync('officeLocations');

    // // parse strings to JSON objects
    const parsedOfficeLocations = parseResults(officeLocations);
    
    if (Object.keys(parsedOfficeLocations).length > 0) {
      res.status(200).send(parsedOfficeLocations);
    }

    if (Object.keys(parsedOfficeLocations).length < 0) {
      res.status(400).send({ message: 'Sorry, no articles were found' });
    }
  } catch (err) {
    if (err) {
      res.status(400).send(err);
    }
  }
});

export const OfficeRouter: Router = router;