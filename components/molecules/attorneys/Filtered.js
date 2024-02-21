import AttorneyCard from 'components/shared/AttorneyCard';
import {
  CentralizedBox,
  ContainerXXL,
  RowSpecial,
} from 'styles/Containers.style';
import { useAttorneysSearch } from 'hooks/useAttornySearch';

const Filtered = ({
  attorneys, userInput, select, offices,
}) => {
  const { attorneysFiltered } = useAttorneysSearch(
    select,
    userInput,
    attorneys,
  );
  return (
    <>
      {attorneysFiltered?.length === 0 ? (
        <h3 className="redTitle text-center d-block mx-auto my-4">
          <strong>Sorry, no attorneys found according to this query.</strong>
        </h3>
      ) : (
        <ContainerXXL>
          <CentralizedBox>
            <RowSpecial>
              {attorneysFiltered.map((info) => (
                <AttorneyCard
                  key={info.id}
                  link={info.link}
                  image={info.better_featured_image}
                  name={info.title}
                  designation={info.designation}
                  locations={info.location_array}
                  number={info.phone}
                  email={info.email}
                  width={130}
                  height={152}
                  offices={offices}
                />
              ))}
            </RowSpecial>
          </CentralizedBox>
        </ContainerXXL>
      )}
    </>
  );
};

export default Filtered;
