import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CovidResourcesBox from 'components/molecules/practice/CovidResourcesBox';
import SidebarContent from 'components/shared/Sidebar';
import textStyles from 'styles/Text.module.css';

const PageSidebar = ({ corePractices, practiceChildren }) => {
  const router = useRouter();
  const slug = router.asPath;
  return (
    <>
      {slug.includes('education-law') && (
        <>
          <CovidResourcesBox
            title="COVID-19 Response Team"
            link="/government-education-covid-19-response-team"
            message="Learn more about the Government & Education Law Practice's COVID-19 focused response team."
          />
          <hr />
        </>
      )}
      {slug.includes('crisis-risk-management') && (
        <>
          <CovidResourcesBox
            title="COVID-19 Crisis Management Unit"
            link="/covid-19-crisis-management-unit"
            message="Learn more about the Crisis & Risk Management Law Practice's COVID-19 Strategic Response Unit."
          />
          <hr />
        </>
      )}
      <SidebarContent title="Core Practices" content={corePractices} tabKey={2} />
      {practiceChildren.length > 0 && (
        <>
          <hr />
          <SidebarContent title="Related Practices" content={practiceChildren} tabKey={1} />
        </>
      )}
    </>
  );
};

export default PageSidebar;
