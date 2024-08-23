import { BsXLg } from 'react-icons/bs';
import { ClearButton } from 'styles/Buttons.style';
import {
  SelectionButton,
  SelectionItem,
  SelectionList,
  SelectionWrapper,
} from 'styles/Filters.style';
import { createMarkup } from 'utils/helpers';
import { useSelector } from 'react-redux';

const Selection = ({ clearAll, clearQuery }) => {
  const { userInput, select } = useSelector((state) => state.attorneys);
  const nonUserInputResults = select?.filter((a) => a.key !== 'query');
  return (
    <SelectionWrapper>
      <SelectionList>
        {userInput?.length > 0 && (
          <SelectionItem>
            <SelectionButton
              variant="Primary"
              id={userInput}
              onClick={() => clearQuery('query')}
              data-toggle="tooltip"
              data-placement="top"
              title="Click on link to remove filter"
            >
              <span dangerouslySetInnerHTML={createMarkup(userInput)} />
              <BsXLg />
            </SelectionButton>
          </SelectionItem>
        )}
        {nonUserInputResults?.map((selection) => (
          <SelectionItem key={selection.key}>
            <SelectionButton
              variant="Primary"
              id={selection.selected}
              onClick={() => clearQuery(selection.key)}
              data-toggle="tooltip"
              data-placement="top"
              data-html="true"
              title="Click on link to remove filter"
            >
              {selection?.selected}
              <BsXLg />
            </SelectionButton>
          </SelectionItem>
        ))}
      </SelectionList>
      {select?.length > 0 && (
        <ClearButton variant="Primary" onClick={clearAll}>
          Clear All
        </ClearButton>
      )}
    </SelectionWrapper>
  );
};

export default Selection;
