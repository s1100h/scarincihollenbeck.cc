import {
  Router, Request, Response,
} from 'express';
import { getAsync, parseResults } from '../redis.utils';

// set up express router
const router: Router = Router();

router.get('/firm-overview', async (req: Request, res: Response) => {
  try {
    const firmOverview = await getAsync('firmOverview');

    // // parse strings to JSON objects
    const parsedFirmOverview = parseResults(firmOverview);
    console.log('parsedFirmOverview');
    console.log(firmOverview)

    if (Object.keys(parsedFirmOverview).length > 0) {
      res.status(200).send(parsedFirmOverview);
    }

    if (Object.keys(parsedFirmOverview).length < 0) {
      res.status(400).send({ message: 'Sorry, no articles were found' });
    }
  } catch (err) {
    if (err) {
      res.status(400).send(err);
    }
  }
});

export const FirmOverviewRouter: Router = router;