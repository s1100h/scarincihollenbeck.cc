import { useRouter } from 'next/router';
import SiteLoader from 'components/site-loader';
import AttorneyProfile from 'layouts/attorney-profile';
import BasicContent from 'components/singleattorney/basic-content';
import SingleAttorneyMatters from 'components/singleattorney/matters';
import SingleAttorneyTableTab from 'components/singleattorney/table';
import SingleAttorneyVideoTab from 'components/singleattorney/video-content';
import { headers } from 'utils/helpers';

export default function Content({
  content,
  bio,
  type,
}) {
  const router = useRouter();
  let contentComponent = <div className="text-center m-5"><h3><strong>No content found...</strong></h3></div>;

  if (router.isFallback) {
    return (
      <div className="my-5 py-5">
        <SiteLoader />
      </div>
    );
  }

  // render content based on type
  console.log(type);
  console.log(bio);
  console.log(content);

  if (type === 'representative-matters') {
    contentComponent = <SingleAttorneyMatters content={content} />;
  } else if (type === 'representative-clients') {
    contentComponent = <SingleAttorneyMatters content={content} />;
  } else if (type === 'media') {
    contentComponent = <SingleAttorneyTableTab content={content} />;
  } else if (type === 'biography') {
    contentComponent = <BasicContent title="" id="biography" content={content} links="" />;
  } else if (type === 'presentations') {
    contentComponent = <SingleAttorneyTableTab content={content} />;
  } else if (type === 'publications') {
    contentComponent = <SingleAttorneyTableTab content={content} />;
  } else if (type === 'videos') {
    contentComponent = <SingleAttorneyVideoTab content={content} />;
  }

  return (
    <AttorneyProfile
      path={router.asPath}
      bio={bio}
      content={contentComponent}
    />
  );
}

export async function getServerSideProps({ params }) {
  // modify single attorney endpoint to grab specific content
  // do some major refactoring on the single attorney bio API endpoint
  const [bio, content] = await Promise.all([
    fetch(
      `http://localhost:8400/wp-json/attorney-profile/main/${params.slug}`,
      { headers },
    ).then((data) => data.json()),
    fetch(
      `http://localhost:8400/wp-json/attorney-profile/attorney/${params.slug}/back-page/${params.type}`,
      { headers },
    ).then((data) => data.json()),
  ]);

  return {
    props: {
      content,
      bio,
      type: params.type,
    },
  };
}
