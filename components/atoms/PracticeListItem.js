import { ChildPracticeLink, DropDownItemTitle } from 'styles/Filters.style';

const PracticeListItem = ({ title, onSelect, pChildren }) => (
  <div>
    <DropDownItemTitle name="practices" variant="link" onClick={(e) => onSelect(e, title)}>
      {title}
    </DropDownItemTitle>
    {pChildren.map((fc) => (
      <ChildPracticeLink key={fc.ID} variant="link" name="practices" onClick={(e) => onSelect(e, fc.title)}>
        {fc.title}
      </ChildPracticeLink>
    ))}
  </div>
);

export default PracticeListItem;
