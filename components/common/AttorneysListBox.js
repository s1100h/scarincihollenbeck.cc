import SliderCommon from 'components/atoms/SliderCommon';
import AttorneyCard from 'components/shared/AttorneyCard';
import {
  ChairBox,
  ListContainer,
  AttorneysSliderBox,
  AttorneysTitleBox,
  UpDownBtn,
} from 'styles/AttorneysListBox.style';

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
          key={attorney.databaseId}
          link={`${attorney.link}`}
          image={attorney.profileImage}
          name={attorney.title}
          designation={attorney.designation}
          number={attorney.phoneNumber}
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
            link={`${attorney.link}`}
            image={attorney.profileImage}
            name={attorney.title}
            designation={attorney.designation}
            number={attorney.phoneNumber}
            email={attorney.email}
            width={80}
            height={112}
            type="/attorneys/[slug]"
            key={attorney.databaseId}
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
            link={`${chair[0].link}`}
            image={chair[0].profileImage}
            name={chair[0].title}
            designation={chair[0].designation}
            number={chair[0].phoneNumber}
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
