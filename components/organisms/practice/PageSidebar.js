import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CovidResourcesBox from 'components/molecules/practice/CovidResourcesBox';
import SidebarContent from 'components/shared/SidebarContent';
import textStyles from 'styles/Text.module.css';

const PageSidebar = ({ corePractices, practiceChildren }) => {
  const router = useRouter();
  const slug = router.asPath;

  return (
    <div className="mt-4">
      {slug.includes('education-law') && (
        <>
          <div>
            <div className="mx-auto d-block">
              <Image
                src="/images/1593501004logo-250x250.png"
                width={200}
                height={200}
                alt="NJSBA 2020 event"
              />
            </div>
            <h5>
              <Link href="https://virtualworkshop.njsba.org/en/" target="_blank" rel="noreferrer">
                <a className={textStyles.redTitle}>
                  <strong>
                    <u>Visit our booth</u>
                  </strong>
                </a>
              </Link>
            </h5>
            <hr />
          </div>
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
    </div>
  );
};

export default PageSidebar;
