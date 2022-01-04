import SingleSubHeader from 'layouts/SingleSubHeader';
import FullWidth from 'layouts/FullWidth';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { createMarkup } from 'utils/helpers';

export default function HolidayPage({
  seo, title, subTitle, canonicalUrl, bodyContent,
}) {
  return (
    <>
      <BasicSiteHead
        title={seo.title}
        metaDescription={seo.metaDescription}
        canonicalUrl={canonicalUrl}
      />
      <SingleSubHeader title={title} subtitle={subTitle} span={7} offset={2} isHoliday />
      <FullWidth>
        <div dangerouslySetInnerHTML={createMarkup(bodyContent)} />
      </FullWidth>
    </>
  );
}
