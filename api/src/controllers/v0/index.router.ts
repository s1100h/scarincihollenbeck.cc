/**
 * Routes
 * https://scarincihollenbeck.com/wp-json/attorney-search/office-locations -> /attorney-filters (Pages: Archive Attorney, Page, QuickNews, Search, Single)
 * https://scarincihollenbeck.com/wp-json/attorney-search/designations -> /attorney-filters (Pages: Archive Attorney, Page, QuickNews, Search, Single)
 * https://scarincihollenbeck.com/wp-json/attorney-search/practices -> /attorney-filters (Pages: Archive Attorney, QuickNews, Search, Single)
 * https://scarincihollenbeck.com/wp-json/location-portal/offices -> /office-locations (Pages: Archive Locations, Front Page)
 * https://scarincihollenbeck.com/wp-json/practice-portal/page/ -> /practices (Pages: Archive Practice)
 * https://scarincihollenbeck.com/wp-json/firm-overview/content -> firm-overview (Pages: Firm Overview)
 * https://scarincihollenbeck.com/wp-json/wp/v2/categories?per_page=100 -> /all-categories (Pages: Page, QuickNews, Search, Single)
 * NEW https://scarincihollenbeck.com/wp-json/core-practices/list -> /core-practices (Pages: Category, Front Page)
 * NEW https://scfarincihollenbeck.com/wp-json/firm-pages/list -> /firm-pages (Pages: Routes(index.js))
 */

import { Router, Request, Response } from 'express';
import { AdminRouter } from './content/routes/adminarchive';
import { SearchOptionsRouter } from './content/routes/searchoptions';
import { AttorneyFilterRouter } from './content/routes/attorneyfilters';
import { CorePracticesRouter } from './content/routes/corepractices';
import { FirmOverviewRouter } from './content/routes/firmoverview';
import { FirmPageRouter } from './content/routes/firmpages';
import { OfficeRouter } from './content/routes/officelocations';
import { PracticePageRouter } from './content/routes/practices';


const router: Router = Router();

router.use('/cached', AdminRouter);
router.use('/cached', SearchOptionsRouter);
router.use('/cached', AttorneyFilterRouter);
router.use('/cached', CorePracticesRouter);
router.use('/cached', FirmOverviewRouter);
router.use('/cached', FirmPageRouter);
router.use('/cached', OfficeRouter);
router.use('/cached', PracticePageRouter);

router.get('/', async (req: Request, res: Response) => {    
    res.send('/cached/');
});

export const IndexRouter: Router = router;