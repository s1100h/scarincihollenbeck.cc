import { PRODUCTION_URL } from 'utils/constants';
import AttorneysPage from 'components/pages/AttorneysDirectory';
import useNotFoundNotification from 'hooks/useNotFoundNotification';
import {
  attorneysPageContent,
  getAttorneys,
  getKaterinTraugh,
  getPracticesWithAttorneys,
} from 'requests/getAttorneys';
import {
  rebuildDataForAttorneysCards,
  sortAttorneysByCategory,
  sortByKey,
} from 'utils/helpers';

/** Map all the page data to component props */
export async function getStaticProps() {
  const page = await attorneysPageContent();
  const { title, seo, attorneyArchives } = page;

  const practicesWithAttorneys = await getPracticesWithAttorneys();
  const attorneys = await getAttorneys();
  const katerinTraugh = await getKaterinTraugh();

  const attorneysRebuildData = rebuildDataForAttorneysCards(
    practicesWithAttorneys,
    attorneys,
  );

  const attorneysWithKaterin = [...attorneysRebuildData, katerinTraugh];

  const sortedTitlesByOrder = sortByKey(
    attorneyArchives?.designationSectionTitles,
    'order',
  );
  const sortedAttorneysByCategory = sortAttorneysByCategory(
    attorneysWithKaterin,
    sortedTitlesByOrder,
  );

  // it was done by request from the client as a temporary solution. 9 May 2024.
  // If you want to delete it and revert the old solution,
  // just replace the justFirmManagementPartners variable with sortedAttorneysByCategory.
  // const justFirmManagementPartners = {
  //   'Firm Managing Partner': {
  //     attorneys: sortedAttorneysByCategory['Firm Managing Partner']?.attorneys || [],
  //   },
  // };
  // const isFirmOverviewPage = pathname.includes('/firm-overview') || pathname.includes('/administration');
  // const differentAttorneysKit = isFirmOverviewPage
  //   ? sortedAttorneys
  //   : justFirmManagementPartners;

  if (!page) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      seo,
      site: {
        title,
        description: attorneyArchives?.description,
      },
      attorneyArchives,
      seoAttorneys: sortedAttorneysByCategory,
    },
    revalidate: 86400,
  };
}

/* Attorneys page component */
const Attorneys = ({
  seo, site, attorneyArchives, seoAttorneys,
}) => {
  const canonicalUrl = `${PRODUCTION_URL}/attorneys`;

  useNotFoundNotification('The selected profile no longer exists.');

  const attorneysPageProps = {
    seo,
    site,
    canonicalUrl,
    attorneyArchives,
    seoAttorneys,
  };

  return <AttorneysPage {...attorneysPageProps} />;
};

export default Attorneys;
