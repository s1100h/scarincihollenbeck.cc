import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import { ClearButton } from 'styles/Buttons.style';
import { RedColorButton } from 'styles/Filters.style';
import textStyles from 'styles/Text.module.css';
import { createMarkup } from 'utils/helpers';

const Selection = ({
  select, userInput, clearQuery, clearAll,
}) => {
  const nonUserInputResults = select.filter((a) => a.key !== 'query');
  return (
    <Container className="mt-2 mb-3">
      <Row>
        <Col sm={12} md={10}>
          <ul className="no-dots list-inline my-2 mx-0">
            {userInput.length > 0 && (
              <li className="list-inline-item">
                <RedColorButton
                  variant="link"
                  id={userInput}
                  onClick={() => clearQuery('query')}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Click on link to remove filter"
                >
                  <strong dangerouslySetInnerHTML={createMarkup(userInput)} />
                </RedColorButton>
              </li>
            )}
            {nonUserInputResults.map((selection) => (
              <li className="list-inline-item" key={selection.key}>
                <RedColorButton
                  variant="link"
                  id={selection.selected}
                  onClick={() => clearQuery(selection.key)}
                  data-toggle="tooltip"
                  data-placement="top"
                  data-html="true"
                  title="Click on link to remove filter"
                >
                  <strong>{selection.selected}</strong>
                </RedColorButton>
              </li>
            ))}
          </ul>
        </Col>
        <ClearButton disabled={!select.length} variant="danger" onClick={clearAll}>
          Clear All
        </ClearButton>
      </Row>
    </Container>
  );
};

export default Selection;
