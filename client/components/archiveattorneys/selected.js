import Button from 'react-bootstrap/Button';
import textStyles from 'styles/Text.module.css';

export default function Selected({ select, userInput, clearQuery }) {
  const nonUserInputResults = select.filter((a) => a.key !== 'query');

  return (
    <ul className="no-dots list-inline my-2 mx-0">
      {userInput.length > 0 && (
        <li className="list-inline-item">
          <Button
            variant="link"
            className={textStyles.redTitle}
            id={userInput}
            onClick={() => clearQuery('query')}
            data-toggle="tooltip"
            data-placement="top"
            title="Click on link to remove filter"
          >
            <strong>
              {userInput}
            </strong>
          </Button>
        </li>
      )}
      {nonUserInputResults.map((s) => (
        <li className=" list-inline-item" key={s.key}>
          <Button
            variant="link"
            className={textStyles.redTitle}
            id={s.selected}
            onClick={() => clearQuery(s.key)}
            data-toggle="tooltip"
            data-placement="top"
            data-html="true"
            title="Click on link to remove filter"
          >
            <strong>
              {s.selected}
            </strong>
          </Button>
        </li>
      ))}
    </ul>
  );
}
