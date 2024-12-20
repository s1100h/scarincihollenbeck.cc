import dynamic from 'next/dynamic';
import empty from 'is-empty';
import { useId } from 'react';
import {
  AttorneyCardsHolder,
  AttorneyCardsWrapper,
} from 'styles/Attornyes.style';
import { Title32 } from 'styles/common/Typography.style';

const LawyerCard = dynamic(() => import('components/shared/LawyerCard'));

const AttorneyCards = ({
  title, content, pathname, isHorizontal,
}) => {
  const componentId = useId();
  const changedTitle = title?.replace(
    'Firm Managing Partner',
    'Firm management',
  );

  return (
    <AttorneyCardsHolder>
      {!empty(changedTitle) && pathname !== '/administration' && (
        <Title32>{changedTitle}</Title32>
      )}
      <AttorneyCardsWrapper>
        {content.map((info) => (
          <LawyerCard
            key={`${info.id || info.title}-${componentId}`}
            link={info.link ? `${info.link}` : info.uri}
            image={info.better_featured_image || info.featuredImage}
            name={info.title}
            designation={
              typeof info.designation !== 'string' ? null : info.designation
            }
            locations={
              info.location_array ? info.location_array : info.designation
            }
            number={info.phone}
            email={info.email}
            isHorizontal={isHorizontal}
          />
        ))}
      </AttorneyCardsWrapper>
    </AttorneyCardsHolder>
  );
};

export default AttorneyCards;
