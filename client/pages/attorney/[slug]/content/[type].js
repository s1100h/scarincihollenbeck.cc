import Error from 'next/error';
import AttorneyProfile from 'layouts/attorney-profile';
import BasicContent from 'components/singleattorney/basic-content';
import SingleAttorneyMatters from 'components/singleattorney/matters';
import SingleAttorneyTableTab from 'components/singleattorney/table';
import SingleAttorneyVideoTab from 'components/singleattorney/video-content';
import CustomContent from 'components/singleattorney/custom-content';
import ImageContent from 'components/singleattorney/image-content';
import { headers } from 'utils/helpers';

export default function Content({ content, bio, type }) {
  let contentComponent = (
    <div className="text-center m-5">
      <h3>
        <strong>No content found...</strong>
      </h3>
    </div>
  );

  if (content.status === 404) {
    return <Error statusCode={404} />;
  }

  if (type === 'representative-matters') {
    contentComponent = <SingleAttorneyMatters content={content} />;
  } else if (type === 'representative-clients') {
    contentComponent = <SingleAttorneyMatters content={content} />;
  } else if (type === 'media') {
    contentComponent = <SingleAttorneyTableTab content={content} />;
  } else if (type === 'biography') {
    contentComponent = (
      <BasicContent title="" id="biography" content={content} links="" />
    );
  } else if (type === 'presentations') {
    contentComponent = <SingleAttorneyTableTab content={content} />;
  } else if (type === 'publications') {
    contentComponent = <SingleAttorneyTableTab content={content} />;
  } else if (type === 'videos') {
    contentComponent = <SingleAttorneyVideoTab content={content} />;
  } else if (type === 'clients') {
    contentComponent = <ImageContent content={content} />;
  } else if (content.length > 0) {
    contentComponent = <CustomContent content={content} />;
  }

  return <AttorneyProfile bio={bio} content={contentComponent} />;
}

export async function getServerSideProps({ params, res }) {
  // modify single attorney endpoint to grab specific content
  // do some major refactoring on the single attorney bio API endpoint
  const [bio, content] = await Promise.all([
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/attorney-profile/main/${params.slug}`,
      { headers },
    ).then((data) => data.json()),
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/attorney-profile/attorney/${params.slug}/back-page/${params.type}`,
      { headers },
    ).then((data) => data.json()),
  ]);

  if (content.status === 404) {
    res.statusCode = 404;

    return {
      props: {
        content,
        bio,
        type: params.type,
      },
    };
  }

  return {
    props: {
      content,
      bio,
      type: params.type,
    },
  };
}
