import { AttorneysContainer } from 'styles/AttorneysListBox.style';
import AttorneyPracticeCard from '../molecules/practice/AttorneyPracticeCard';
import useStateScreen from '../../hooks/useStateScreen';
import AttorneyCard from '../shared/AttorneyCard';

const AttorneysListBox = ({ attorneys }) => {
  const { chairs, attorneysList } = attorneys;
  const { isMobileScreen } = useStateScreen();

  return (
    <AttorneysContainer>
      {chairs?.length > 0 && (
        <div className="chair-box">
          <h3>Chair</h3>
          <div>
            {isMobileScreen
              ? chairs?.map((chair) => <AttorneyCard key={chair.databaseId} link={`${chair.link}`} image={chair.profileImage} name={chair.title} designation={chair.designation} number={chair.phoneNumber} email={chair.email} width={80} height={112} type="/attorneys/[slug]" />)
              : chairs?.map((chair) => <AttorneyPracticeCard classNameProp="vertical-attorney-card" key={chair.databaseId} link={`${chair.link}`} image={chair.profileImage} name={chair.title} designation={chair.designation} number={chair.phoneNumber} email={chair.email} width={180} height={210} />)}
          </div>
        </div>
      )}

      {attorneysList?.length > 0 && (
        <div className="attorneys-list-box">
          <h3>Attorneys</h3>
          <div>
            {isMobileScreen
              ? attorneysList.map((attorney) => (
                <AttorneyCard key={attorney.databaseId} link={`${attorney.link}`} image={attorney.profileImage} name={attorney.title} designation={attorney.designation} number={attorney.phoneNumber} email={attorney.email} width={80} height={112} type="/attorneys/[slug]" />
              ))
              : attorneysList.map((attorney) => (
                <AttorneyPracticeCard classNameProp="vertical-attorney-card" key={attorney.databaseId} link={`${attorney.link}`} image={attorney.profileImage} name={attorney.title} designation={attorney.designation} number={attorney.phoneNumber} email={attorney.email} width={180} height={210} />
              ))}
          </div>
        </div>
      )}
    </AttorneysContainer>
  );
};

export default AttorneysListBox;
