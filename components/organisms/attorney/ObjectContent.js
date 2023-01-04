import Table from 'components/molecules/attorney/Table';
import EducationContent from 'components/molecules/attorney/EducationContent';
import ContentTitle from 'components/atoms/ContentTitle';
import ContactForm from 'components/molecules/attorney/ContactForm';
import Videos from 'components/molecules/attorney/Videos';
import BlogList from 'components/molecules/attorney/BlogList';
import General from './General';

const renderBody = (title, content) => {
  switch (title) {
    case 'Media':
      return (
        <>
          <ContentTitle title={title} />
          <Table content={content} />
        </>
      );
    case 'General':
      return <General content={content} />;
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
    case 'Videos':
      return (
        <>
          <ContentTitle title={title} />
          <Videos content={content} />
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
