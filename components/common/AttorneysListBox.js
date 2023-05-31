import { AttorneysContainer } from 'styles/AttorneysListBox.style';
import AttorneyCard from '../shared/AttorneyCard';

const AttorneysListBox = ({ attorneys }) => {
  const { chairs, attorneysList } = attorneys;

  return (
    <>
      {chairs?.length > 0 && (
        <AttorneysContainer>
          <h3>Chair</h3>
          <div>
            {chairs?.map((chair) => (
              <AttorneyCard
                key={chair.databaseId}
                link={`${chair.link}`}
                image={chair.profileImage}
                name={chair.title}
                designation={chair.designation}
                number={chair.phoneNumber}
                email={chair.email}
                width={80}
                height={112}
                type="/attorneys/[slug]"
              />
            ))}
          </div>
        </AttorneysContainer>
      )}

      {attorneysList?.length > 0 && (
        <AttorneysContainer>
          <h3>Attorneys</h3>
          <div>
            {attorneysList.map((attorney) => (
              <AttorneyCard
                key={attorney.databaseId}
                link={`${attorney.link}`}
                image={attorney.profileImage}
                name={attorney.title}
                designation={attorney.designation}
                number={attorney.phoneNumber}
                email={attorney.email}
                width={80}
                height={112}
                type="/attorneys/[slug]"
              />
            ))}
          </div>
        </AttorneysContainer>
      )}
    </>
  );
};

export default AttorneysListBox;
