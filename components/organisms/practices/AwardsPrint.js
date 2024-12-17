import AwardCard from 'components/molecules/home/AwardCard';
import DisclaimerText from 'components/atoms/DisclaimerText';
import { TitleH3 } from 'styles/common/Typography.style';
import { AwardsPrintContainer, AwardsPrintList } from 'styles/Awards.style';
import empty from 'is-empty';

const AwardsPrint = ({ awards }) => {
  if (empty(awards)) return null;

  return (
    <AwardsPrintContainer>
      <TitleH3>Awards / Accolades</TitleH3>
      <AwardsPrintList>
        {awards?.map((item) => (
          <AwardCard
            key={`${item?.id}-${item?.year}`}
            image={item?.image}
            year={item?.year}
            label={item?.label}
            link={item?.link}
            isLightVariant
            isPrint
          />
        ))}
      </AwardsPrintList>
      <DisclaimerText text="No aspect of the advertisement has been approved by the Supreme Court." />
    </AwardsPrintContainer>
  );
};

export default AwardsPrint;
