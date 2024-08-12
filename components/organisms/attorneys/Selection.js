import { BsXLg } from 'react-icons/bs';
import { ClearButton } from 'styles/Buttons.style';
import {
  SelectionButton,
  SelectionItem,
  SelectionList,
  SelectionWrapper,
} from 'styles/Filters.style';
import { createMarkup } from 'utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { clearQuery } from '../../../redux/slices/attorneys.slice';

const Selection = ({ clearAll }) => {
  const { userInput, select } = useSelector((state) => state);
  const dispatch = useDispatch();
  const nonUserInputResults = select?.filter((a) => a.key !== 'query');
  return (
    <SelectionWrapper>
      <SelectionList>
        {userInput?.length > 0 && (
          <SelectionItem>
            <SelectionButton
              variant="Primary"
              id={userInput}
              onClick={() => dispatch(clearQuery('query'))}
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
              onClick={() => dispatch(clearQuery(selection.key))}
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
