import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Footer from '../../components/footer';
import SimpleList from '../../components/archivepractice/practice-simple-list';
import PracticeBlockList from '../../components/archivepractice/practice-block-list';
import SingleSubHeader from '../../layouts/single-sub-header';
import FullWidth from '../../layouts/full-width';
import { headers, sortByKey } from '../../utils/helpers';
import { singleCityBackgroundJPG } from '../../utils/next-gen-images';

function sortPracticeCategorys(list) {
  const core = list.filter((e) => e.category === 'Core Practices');
  const additional = list.filter((e) => e.category === 'Additional Practices');
  const business = list.filter((e) => e.category === 'Business Related Practices');

  return {
    core,
    additional,
    business,
  };
};

export default function Administration({ slides, core, additional, business, seo }){

  const sortedCore = sortByKey(core, 'title');
  const sortedAdditional = sortByKey(additional, 'title');
  const sortedBusiness = sortByKey(business, 'title');

  return (
    <>
      <NextSeo
          title={seo.title}
          description={seo.metaDescription}
          canonical={`http://scarincihollenbeck.com/${seo.canonicalLink}`}
        />
      <SingleSubHeader
          title="Legal Practices"
          subtitle="Scarinci Hollenbeck attorneys at law provide a fully scaled platform of law practices for today&apos;s businesses. Recognizing the complexity of the law practices, we have staffed each practice group with lawyers experienced in the particular area of your need."         
          image={singleCityBackgroundJPG}
        />
      <div id="archive-practice">
        <FullWidth>
          <div id="archive-practice">
            <p className="text-muted lead text-center w-100">
              As you scroll through the law practices and locate the sub-practice groups that most closely identifies with your need, feel free to contact any of the attorneys identified within the sub-practice group. Feel free to contact any of the Section Chiefs identified under each of the named law practices. They will be happy to assist you and guide you to the appropriate attorney for resolution of your issue.
            </p>
            <div className="mt-4 px-0">
              <div className="line-header">
                <h3>CORE PRACTICES</h3>
              </div>
            </div>
            <PracticeBlockList list={sortedCore} />
            <div className="mt-4 px-0">
              <div className="line-header">
                <h3>ADDITIONAL PRACTICES</h3>
              </div>
            </div>
            <PracticeBlockList list={sortedAdditional} id={28270} />
            <div className="mt-4 px-0">
              <div className="line-header">
                <h3>BUSINESS RELATED LEGAL SERVICES</h3>
              </div>
            </div>
            <SimpleList list={sortedBusiness} />          
          </div>        
        </FullWidth>
      </div>
      <Footer slides={slides} />
    </>
  )
}

export async function getStaticProps() {
  const [practiceJson, slides] = await Promise.all([
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/practice-portal/page/`, { headers }).then(data => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers }).then(data => data.json())
  ]);
  const results = await sortPracticeCategorys(practiceJson.practices);
  const { core, additional, business } = results;

  return {
    props: {
      slides,
      core,
      additional,
      business,
      seo: practiceJson.seo,
    },
  }
}