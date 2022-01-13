import dynamic from 'next/dynamic';
import { createMarkup } from 'utils/helpers';

const ContentTitle = dynamic(() => import('components/molecules/attorney/ContentTitle'));

const AdditionalTabs = ({ tabs }) => (
  <div className="pt-4">
    {tabs.map(({ content, title }) => (
      <div key={title} className="mt-3">
        <ContentTitle title={title} />
        <span dangerouslySetInnerHTML={createMarkup(content)} />
      </div>
    ))}
  </div>
);

export default AdditionalTabs;
