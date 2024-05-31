import AttorneyCards from 'components/atoms/AttorneyCards';
import { useRouter } from 'next/router';
import empty from 'is-empty';

const NonFiltered = ({ attorneys }) => {
  if (empty(attorneys)) {
    return null;
  }
  const { pathname } = useRouter();

  return (
    <>
      {Object.entries(attorneys).map((attorney) => (
        <AttorneyCards
          key={`${attorney[0]}-attorney`}
          title={attorney[0]}
          pathname={pathname}
          content={attorney[1].attorneys}
        />
      ))}
    </>
  );
};

export default NonFiltered;
