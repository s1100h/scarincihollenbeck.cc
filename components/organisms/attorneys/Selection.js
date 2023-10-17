import { Container, Row, Col } from 'react-bootstrap';
import { BsXLg } from 'react-icons/bs';
import { ClearButton } from 'styles/Buttons.style';
import { ResultButton } from 'styles/Filters.style';
import { createMarkup } from 'utils/helpers';

const Selection = ({
  select, userInput, clearQuery, clearAll,
}) => {
  const nonUserInputResults = select.filter((a) => a.key !== 'query');
  return (
    <Container className="mt-2 mb-1" fluid>
      <Row>
        <Col className="mb-lg-0" sm={12} md={10}>
          <ul className="no-dots list-inline m-0">
            {userInput.length > 0 && (
              <li className="list-inline-item mt-2">
                <ResultButton
                  variant="Primary"
                  id={userInput}
                  onClick={() => clearQuery('query')}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Click on link to remove filter"
                >
                  <span dangerouslySetInnerHTML={createMarkup(userInput)} />
                  <BsXLg />
                </ResultButton>
              </li>
            )}
            {nonUserInputResults.map((selection) => (
              <li className="list-inline-item mt-2" key={selection.key}>
                <ResultButton
                  variant="Primary"
                  id={selection.selected}
                  onClick={() => clearQuery(selection.key)}
                  data-toggle="tooltip"
                  data-placement="top"
                  data-html="true"
                  title="Click on link to remove filter"
                >
                  {selection.selected}
                  <BsXLg />
                </ResultButton>
              </li>
            ))}
          </ul>
        </Col>
        {select.length > 0 && (
          <ClearButton
            className="mt-2 mb-xs-0"
            variant="Primary"
            onClick={clearAll}
          >
            Clear All
          </ClearButton>
        )}
      </Row>
    </Container>
  );
};

export default Selection;
