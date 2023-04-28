import Link from 'next/link';
import { SideBarPracticeBox } from '../../../styles/Practices.style';

const SideBarPracticeList = ({ title, practicesList }) => (
  <SideBarPracticeBox>
    <h3>{title}</h3>
    <ul>
      {practicesList.map((practice) => (
        <li key={practice.id || practice.ID}>
          <Link href={practice.slug}>{practice.label || practice.title}</Link>
        </li>
      ))}
    </ul>
  </SideBarPracticeBox>
);

export default SideBarPracticeList;
