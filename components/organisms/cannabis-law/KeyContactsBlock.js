import Image from 'next/image';
import { useId } from 'react';
import { KeyContactsBlockContainer, KeyContactsWrapper } from '../../../styles/practices-special-style/canabis-law/KeyContactsBlock.style';
import AttorneyCard from '../../shared/AttorneyCard';
import wordsPictureWhite from '../../../public/images/helping_Cannabis_words_white.svg';
import { FullHDContainer } from '../../../styles/practices-special-style/commonForSpecial.style';

const KeyContactsBlock = ({ keyContactsData, keyContacts }) => (
  <KeyContactsBlockContainer>
    <FullHDContainer>
      <div className="list-smoker-box">
        <ul>
          {keyContactsData.listOfLegalGuidanceRegarding.map(({ issue }) => (
            <li key={useId()}>{issue}</li>
          ))}
        </ul>
        <div className="smoker">
          <Image width={500} height={180} src={keyContactsData.underlay.sourceUrl} alt={keyContactsData.underlay.altText} />
          <Image className="words-picture" src={wordsPictureWhite} alt="Helping Cannabis Businesses Navigate Complex Laws" />
        </div>
      </div>
      <KeyContactsWrapper>
        <h3 className="key-contacts-title">Key Contacts</h3>
        {keyContacts.map((author) => (
          <AttorneyCard key={author.databaseId} link={author.uri || author.link} name={author.display_name || author.title} designation={author.designation} image={author.profileImage} number={author.phoneNumber} email={author.email} />
        ))}
      </KeyContactsWrapper>
    </FullHDContainer>
  </KeyContactsBlockContainer>
);

export default KeyContactsBlock;
