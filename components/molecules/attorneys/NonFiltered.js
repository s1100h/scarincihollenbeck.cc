import AttorneyCards from 'components/atoms/AttorneyCards';
import { useRouter } from 'next/router';
import empty from 'is-empty';
import LogoSeparator from 'components/common/LogoSeparator';
import { Fragment } from 'react';

const NonFiltered = ({ attorneys, isVertical = false }) => {
  if (empty(attorneys)) {
    return null;
  }
  const { pathname } = useRouter();

  return Object.entries(attorneys).map((attorney, index) => (
    <Fragment key={`${attorney[0]}-attorney`}>
      <AttorneyCards
        title={attorney[0]}
        pathname={pathname}
        content={attorney[1].attorneys}
        isHorizontal={!isVertical && attorney[0] !== 'Firm Managing Partner'}
      />
      {index < Object.entries(attorneys).length - 1 && (
        <LogoSeparator direction="row" />
      )}
    </Fragment>
  ));
};

export default NonFiltered;
