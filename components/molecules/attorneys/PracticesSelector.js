import dynamic from 'next/dynamic';
import { DropdownSelectorBtn, FilterBox } from 'styles/Filters.style';
import Accordion from 'react-bootstrap/Accordion';
import empty from 'is-empty';
import { useState } from 'react';
import useStateScreen from '../../../hooks/useStateScreen';

const PracticeListItem = dynamic(() => import('components/atoms/PracticeListItem'));

const PracticesSelector = ({ practices, onSelect }) => {
  const { isTabletScreen } = useStateScreen();
  const [isSecondLvl, setIsSecondLvl] = useState(false);
  const [secondLvlData, setSecondLvlData] = useState([]);
  const [activeItemTitle, setActiveItemTitle] = useState(null);
  const handleClickFirstLvl = (event, data, id, title) => {
    if (!empty(data)) {
      setIsSecondLvl(true);
      setSecondLvlData(data);
      setActiveItemTitle(title);
    } else {
      setIsSecondLvl(false);
      setSecondLvlData([]);
      onSelect({ target: { name: 'practices' } }, title);
    }
  };

  const handleSelectPractice = () => onSelect({ target: { name: 'practices' } }, activeItemTitle);

  return (
    <DropdownSelectorBtn
      variant="link"
      title="Filter by practice"
      className="my-3 my-md-0"
      props={{ bigMenu: 'true' }}
    >
      <FilterBox>
        {practices?.map((practice) => (
          <>
            {isTabletScreen && !empty(practice?.childPractice) ? (
              <Accordion className="mobile-filter">
                <Accordion.Item
                  onClick={() => setActiveItemTitle(practice?.title)}
                  eventKey={practice?.databaseId}
                >
                  <Accordion.Header>{practice?.title}</Accordion.Header>
                  <Accordion.Body>
                    <FilterBox>
                      <button onClick={handleSelectPractice}>
                        {activeItemTitle}
                        {', '}
                        main
                      </button>
                      {practice?.childPractice.map((child) => (
                        <button
                          key={child?.databaseId}
                          onClick={() => onSelect(
                            { target: { name: 'practices' } },
                            child.title,
                          )}
                        >
                          {child.title}
                        </button>
                      ))}
                    </FilterBox>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            ) : (
              <button
                className={`w-100 mb-1 ${
                  !empty(practice?.childPractice) ? 'active' : ''
                }`}
                key={practice?.databaseId}
                onClick={(event) => {
                  handleClickFirstLvl(
                    event,
                    practice?.childPractice,
                    practice?.databaseId,
                    practice.title,
                  );
                }}
              >
                {practice?.title}
              </button>
            )}
          </>
        ))}
      </FilterBox>
      {isSecondLvl && !isTabletScreen && (
        <FilterBox>
          <h6>{activeItemTitle}</h6>
          <button onClick={handleSelectPractice}>
            {activeItemTitle}
            {', '}
            main
          </button>
          {secondLvlData
            && secondLvlData?.map((child) => (
              <button
                key={child.databaseId}
                onClick={() => onSelect({ target: { name: 'practices' } }, child.title)}
              >
                {child.title}
              </button>
            ))}
        </FilterBox>
      )}
      {/* <Col className="rounded-0 m-0"> */}
      {/*    {practices.map((ft) => ( */}
      {/*        <PracticeListItem */}
      {/*          key={ft.databaseId} */}
      {/*          title={ft.title} */}
      {/*          onSelect={onSelect} */}
      {/*          pChildren={ft.childPractice} */}
      {/*        /> */}
      {/*    ))} */}
      {/* </Col> */}
    </DropdownSelectorBtn>
  );
};
export default PracticesSelector;
