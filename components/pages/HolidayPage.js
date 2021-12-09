import { NextSeo } from 'next-seo';
import SingleSubHeader from 'layouts/single-sub-header';
import FullWidth from 'layouts/full-width';
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
