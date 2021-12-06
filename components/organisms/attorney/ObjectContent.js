import Table from 'components/molecules/attorney/Table';
import Articles from 'components/molecules/attorney/Articles';
import EducationContent from 'components/molecules/attorney/EducationContent';
import ContentTitle from 'components/molecules/attorney/ContentTitle';
import ContactForm from 'components/molecules/attorney/ContactForm';
import Videos from 'components/molecules/attorney/Videos';

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
      return (
        <>
          <ContentTitle title={title} />
          <Articles content={content} />
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
      return (
        <>
          <ContentTitle title="News & Press Releases" />
          <Articles content={content} />
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
    default:
      return <>Content not found..</>;
  }
};

const ObjectContent = ({ title, content }) => renderBody(title, content);

export default ObjectContent;
