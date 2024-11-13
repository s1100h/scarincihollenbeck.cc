import { useId } from 'react';
import empty from 'is-empty';
import {
  KeyContactsBlockContainer,
  KeyContactsWrapper,
} from '../../../styles/practices-special-style/canabis-law/KeyContactsBlock.style';
import AttorneyCard from '../../shared/AttorneyCard';
import { FullHDContainer } from '../../../styles/practices-special-style/commonForSpecial.style';
import AboutAuthorFormCard from '../post/AboutAuthorFormCard';

const KeyContactsBlock = ({ keyContactsData, keyContacts }) => {
  if (empty(keyContactsData)) return null;
  return (
    <KeyContactsBlockContainer>
      <FullHDContainer>
        <div className="list-smoker-box">
          <p>{keyContactsData.article}</p>
          <ul>
            {keyContactsData.listOfLegalGuidanceRegarding.map(({ issue }) => (
              <li key={useId()}>{issue}</li>
            ))}
          </ul>
        </div>
        <KeyContactsWrapper>
          <h2 className="key-contacts-title">Key Contacts</h2>
          {keyContacts.map((author) => (
            <AttorneyCard
              key={author.databaseId}
              link={author.uri || author.link}
              name={author.display_name || author.title}
              designation={author.designation}
              image={author.profileImage}
              number={author.phoneNumber}
              email={author.email}
            />
          ))}
          <AboutAuthorFormCard />
        </KeyContactsWrapper>
      </FullHDContainer>
    </KeyContactsBlockContainer>
  );
};

export default KeyContactsBlock;
