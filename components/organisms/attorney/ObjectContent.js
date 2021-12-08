import Table from 'components/molecules/attorney/Table';
import EducationContent from 'components/molecules/attorney/EducationContent';
import ContentTitle from 'components/molecules/attorney/ContentTitle';
import ContactForm from 'components/molecules/attorney/ContactForm';
import Videos from 'components/molecules/attorney/Videos';
import ArticleFeed from 'components/shared/ArticleFeed';
import BlogList from 'components/molecules/attorney/BlogList';

import { authorFirmNewsByIdQuery, authorPostsByIdQuery } from 'utils/graphql-queries';

const renderBody = (title, content) => {
  switch (title) {
    case 'Media':
      return (
        <>
          <ContentTitle title={title} />
          <Table content={content} />
        </>
      );
    case 'Presentations':
      return (
        <>
          <ContentTitle title={title} />
          <Table content={content} />
        </>
      );
    case 'Publications':
      return (
        <>
          <ContentTitle title={title} />
          <Table content={content} />
        </>
      );
    case 'Blogs':
      const blogQuery = {
        query: authorPostsByIdQuery,
        variables: {
          first: 8,
          last: null,
          after: null,
          before: null,
          id: content.id,
        },
      };

      return (
        <>
          <ContentTitle title={title} />
          <ArticleFeed query={blogQuery} />
        </>
      );
    case 'Videos':
      return (
        <>
          <ContentTitle title={title} />
          <Videos content={content} />
        </>
      );
    case 'News Press Releases':
      const newsQuery = {
        query: authorFirmNewsByIdQuery,
        variables: {
          first: 8,
          last: null,
          after: null,
          before: null,
          name: content.id,
        },
      };
      return (
        <>
          <ContentTitle title="News & Press Releases" />
          <ArticleFeed query={newsQuery} />
        </>
      );
    case 'Education':
      return <EducationContent {...content} />;

    case 'Contact':
      return (
        <>
          <ContentTitle title={`Get in touch with ${content.name}`} />
          <ContactForm {...content} />
        </>
      );
    case 'Constitutional Law Reporter':
      return (
        <>
          <ContentTitle title="Articles Published on Constitutional Law Reporter" />
          <BlogList content={content} />
        </>
      );
    case 'Government & Law':
      return (
        <>
          <ContentTitle title="Articles Published on Government & Law" />
          <BlogList content={content} />
        </>
      );
    default:
      return <>Content not found..</>;
  }
};

const ObjectContent = ({ title, content }) => renderBody(title, content);

export default ObjectContent;
