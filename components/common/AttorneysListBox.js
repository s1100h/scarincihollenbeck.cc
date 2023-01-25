import SliderCommon from 'components/atoms/SliderCommon';
import AttorneyCard from 'components/shared/AttorneyCard';
import {
  ChairBox,
  ListContainer,
  AttorneysSliderBox,
  AttorneysTitleBox,
  UpDownBtn,
} from 'styles/AttorneysListBox.style';
import { formatSrcToCloudinaryUrl } from 'utils/helpers';
import { useId } from 'react';

const AttorneysListBox = ({ attorneys }) => {
  const { chair, attorneysList } = attorneys;

  let slider = null;

  const setSliderRef = (element) => {
    slider = element;
  };

  const renderAttorneysList = (attorneys) => {
    if (attorneys.length <= 3) {
      return attorneys.map((attorney) => (
        <AttorneyCard
          key={useId()}
          link={`/attorneys/${attorney.link}`}
          image={formatSrcToCloudinaryUrl(attorney.image)}
          name={attorney.name}
          designation={attorney.designation}
          number={attorney.contact}
          email={attorney.email}
          width={80}
          height={112}
          type="/attorneys/[slug]"
        />
      ));
    }

    return (
      <SliderCommon
        ref={(el) => setSliderRef(el)}
        isVertical
        componentsArr={attorneys.map((attorney) => (
          <AttorneyCard
            link={`/attorneys/${attorney.link}`}
            image={formatSrcToCloudinaryUrl(attorney.image)}
            name={attorney.name}
            designation={attorney.designation}
            number={attorney.contact}
            email={attorney.email}
            width={80}
            height={112}
            type="/attorneys/[slug]"
          />
        ))}
      />
    );
  };

  return (
    <ListContainer>
      {chair.length > 0 && (
        <ChairBox>
          <h5>Chair</h5>
          <AttorneyCard
            link={`/attorneys/${chair[0].link}`}
            image={formatSrcToCloudinaryUrl(chair[0].image)}
            name={chair[0].name}
            designation={chair[0].designation}
            number={chair[0].contact}
            email={chair[0].email}
            width={80}
            height={112}
            type="/attorneys/[slug]"
          />
        </ChairBox>
      )}

      <AttorneysTitleBox isSingle={chair.length === 0 && 'true'}>
        <h5>Attorneys</h5>
        <span>
          (
          {attorneysList.length}
          )
        </span>
        {attorneysList.length >= 3 && (
          <>
            <UpDownBtn variant="secondary" size="sm" onClick={() => slider?.slickNext()}>
              ▲
            </UpDownBtn>
            <UpDownBtn
              variant="secondary"
              size="sm"
              rotate="true"
              onClick={() => slider?.slickPrev()}
            >
              ▲
            </UpDownBtn>
          </>
        )}
      </AttorneysTitleBox>
      <AttorneysSliderBox>{renderAttorneysList(attorneysList)}</AttorneysSliderBox>
    </ListContainer>
  );
};

export default AttorneysListBox;
