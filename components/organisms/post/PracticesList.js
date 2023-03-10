import Link from 'next/link';
import { GradientPracticeBox } from '../../../styles/Post/PostSideBar.style';

const PracticesList = ({ corePracticesArr }) => (
  <GradientPracticeBox>
    <h3>Core Practice</h3>
    <ul>
      {corePracticesArr.map((practice) => (
        <li key={practice.databaseId}>
          <Link href={practice.uri}>{practice.title}</Link>
        </li>
      ))}
    </ul>
  </GradientPracticeBox>
);

export default PracticesList;
