import empty from 'is-empty';
import Link from 'next/link';
import { Fragment } from 'react';
import { PracticesTilesContainer, PracticeTile } from '../../../styles/Practices.style';
import { Back, Front } from '../../../styles/attorney-page/AttorneyProfile.style';

const PracticesTiles = ({ practicesList }) => (
  <PracticesTilesContainer>
    <ul>
      {practicesList.map(({
        databaseId, childPractice, uri, title, practiceImage,
      }) => (
        <Fragment key={databaseId}>
          {!empty(childPractice) ? (
            <PracticeTile backgroundImg={!empty(practiceImage?.sourceUrl) ? practiceImage?.sourceUrl : ''}>
              <Front>{title}</Front>
              <Back>
                <ul>
                  {childPractice.map(({ databaseId, uri, title }) => (
                    <li key={databaseId}>
                      <Link href={uri}>{title}</Link>
                    </li>
                  ))}
                </ul>
              </Back>
            </PracticeTile>
          ) : (
            <PracticeTile key={databaseId}>{title}</PracticeTile>
          )}
        </Fragment>
      ))}
    </ul>
  </PracticesTilesContainer>
);

export default PracticesTiles;
