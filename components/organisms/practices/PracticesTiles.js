// ID
// 	:
// 	29592
// category
// 	:
// 	"Additional Practices"
// children
// 	:
// 	[]
// slug
// 	:
// 	"/practices/new-jersey-cannabis-law"
// test
// 	:
// 	""
// title
// 	:
import empty from 'is-empty';
import Link from 'next/link';
import { PracticesTilesContainer, PracticeTile } from '../../../styles/Practices.style';
import { Back, Front } from '../../../styles/attorney-page/AttorneyProfile.style';

const PracticesTiles = ({ practicesList }) => (
  <PracticesTilesContainer>
    <ul>
      {practicesList.map(({
        ID, children, slug, title,
      }) => (
        <>
          {!empty(children) ? (
            <PracticeTile key={ID}>
              <Front>{title}</Front>
              <Back>
                <ul>
                  {children.map(({ ID, slug, title }) => (
                    <li key={ID}>
                      <Link href={slug}>{title}</Link>
                    </li>
                  ))}
                </ul>
              </Back>
            </PracticeTile>
          ) : (
            <PracticeTile key={ID}>{title}</PracticeTile>
          )}
        </>
      ))}
    </ul>
  </PracticesTilesContainer>
);

export default PracticesTiles;
