import SubHeader from 'layouts/SubHeader/SubHeader';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { categoryPostsByIdQuery } from 'requests/graphql-queries';
import useApolloQuery from 'hooks/useApolloQuery';
import PracticeContent from 'components/organisms/practices/PracticeContent';
import DefaultSubHeaderNew from 'layouts/SubHeader/DefaultSubHeaderNew';

const PracticePageNew = ({
  practice,
  canonicalUrl,
  attorneysSchemaData,
  keyContactsList,
  tabs,
}) => (
  <>
    <BasicSiteHead
      title={practice.seo.title}
      metaDescription={practice.seo.metaDescription}
      canonicalUrl={canonicalUrl}
      personDataForSchema={attorneysSchemaData}
    />
    <DefaultSubHeaderNew
      title={practice.title}
      subtitle={practice.practicesIncluded.description}
      keyContacts={keyContactsList}
    />
    <PracticeContent data={tabs} title={practice.title} />
  </>
);

export default PracticePageNew;
