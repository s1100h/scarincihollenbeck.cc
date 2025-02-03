import { BsXLg } from 'react-icons/bs';
import { ClearButton } from 'styles/Buttons.style';
import {
  SelectionButton,
  SelectionItem,
  SelectionList,
  SelectionWrapper,
} from 'styles/Filters.style';
import { createMarkup } from 'utils/helpers';

const Selection = ({
  keyword, selections, clearAll, clearQuery,
}) => {
  const selectionsWithoutKeyword = selections?.filter(
    (a) => a.key !== 'keyword',
  );
  return (
    <SelectionWrapper>
      <SelectionList>
        {keyword?.length > 0 && (
          <SelectionItem>
            <SelectionButton
              variant="Primary"
              id={keyword}
              onClick={() => clearQuery('keyword')}
              data-toggle="tooltip"
              data-placement="top"
              title="Click on link to remove filter"
            >
              <span dangerouslySetInnerHTML={createMarkup(keyword)} />
              <BsXLg />
            </SelectionButton>
          </SelectionItem>
        )}
        {selectionsWithoutKeyword?.map((selection) => (
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
      {selections?.length > 0 && (
        <ClearButton variant="Primary" onClick={clearAll}>
          Clear All
        </ClearButton>
      )}
    </SelectionWrapper>
  );
};

export default Selection;
