import MemorialHeader from 'components/organisms/memorials/MemorialHeader';
import PersonSiteHead from 'components/shared/head/PersonSiteHead';
import { CURRENT_DOMAIN } from 'utils/constants';

const MemorialPage = ({ seo, pageData }) => {
  const {
    name, image, additionalInfo, title, description, born, death,
  } = pageData;
  return (
    <>
      <PersonSiteHead
        title={seo?.title}
        metaDescription={seo?.metaDescription}
        canonicalUrl={`${CURRENT_DOMAIN}/${seo.canonicalLink}`}
        name={name}
        featuredImage={seo.image}
        designation="deceased"
      />
      <MemorialHeader
        name={name}
        profileImage={image}
        additionalInfo={additionalInfo}
        descriptionTitle={title}
        description={description}
        born={born}
        death={death}
      />
    </>
  );
};

export default MemorialPage;
