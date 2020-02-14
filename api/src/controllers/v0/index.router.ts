/**
 * Routes
 * https://scarincihollenbeck.com/wp-json/admin-search/admin/ -> /admin-archive(Pages: Archive Admin)
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
import { AllCategories } from './content/routes/allcategories';
// import { AttorneyFilterRouter } from './content/routes/attorenyFilter';
// import { FirmOverviewRouter } from './content/routes/firmoverview';
// import { FirmPageRouter } from './content/routes/firmpage';
// import { OfficeRouter } from './content/routes/officelocations';


const router: Router = Router();

router.use('/cached', AdminRouter);
router.use('/cached', AllCategories);
// router.use('/cached', AttorneyFilterRouter);
// router.use('/cached', FirmOverviewRouter);
// router.use('/cached', FirmPageRouter);
// router.use('/cached', OfficeRouter);

router.get('/', async (req: Request, res: Response) => {    
    res.send(`V0`);
});

export const IndexRouter: Router = router;