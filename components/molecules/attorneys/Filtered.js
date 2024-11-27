import LawyerCard from 'components/shared/LawyerCard';
import { useAttorneysSearch } from 'hooks/useAttornySearch';
import { BsExclamationTriangle } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { AttorneyCardsWrapper } from 'styles/Attornyes.style';
import {
  FiltersNotFound,
  FiltersNotFoundButton,
  FiltersNotFoundMessage,
} from 'styles/Filters.style';
import { clearAll } from '../../../redux/slices/attorneys.slice';

const Filtered = ({ attorneys, userInput, select }) => {
  const dispatch = useDispatch();
  const { attorneysFiltered } = useAttorneysSearch(
    select,
    userInput,
    attorneys,
  );

  return (
    <>
      {attorneysFiltered?.length === 0 ? (
        <FiltersNotFound>
          <FiltersNotFoundMessage>
            <BsExclamationTriangle size={24} />
            <span>Sorry, no attorneys found according to this query.</span>
          </FiltersNotFoundMessage>
          <FiltersNotFoundButton onClick={() => dispatch(clearAll())}>
            VIEW ALL
          </FiltersNotFoundButton>
        </FiltersNotFound>
      ) : (
        <AttorneyCardsWrapper>
          {attorneysFiltered.map((info) => (
            <LawyerCard
              key={info.id}
              link={info.link}
              image={info.better_featured_image}
              name={info.title}
              designation={info.designation}
              locations={info.location_array}
              number={info.phone}
              email={info.email}
              isHorizontal
            />
          ))}
        </AttorneyCardsWrapper>
      )}
    </>
  );
};

export default Filtered;
