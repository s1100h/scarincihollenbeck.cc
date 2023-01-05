import Table from 'components/molecules/attorney/Table';
import AffiliationsContent from 'components/molecules/attorney/AffiliationsContent';
import ContentTitle from 'components/atoms/ContentTitle';
import ContactForm from 'components/molecules/attorney/ContactForm';
import Videos from 'components/molecules/attorney/Videos';
import BlogList from 'components/molecules/attorney/BlogList';
import Surface from 'components/atoms/micro-templates/surface';
import General from './General';

const renderBody = (title, content) => {
  switch (title) {
    case 'Media':
      return (
        <Surface>
          <ContentTitle title={title} />
          <Table content={content} />
        </Surface>
      );
    case 'General':
      return <General content={content} />;
    case 'Presentations':
      return (
        <Surface>
          <ContentTitle title={title} />
          <Table content={content} />
        </Surface>
      );
    case 'Publications':
      return (
        <Surface>
          <ContentTitle title={title} />
          <Table content={content} />
        </Surface>
      );
    case 'Videos':
      return (
        <Surface>
          <ContentTitle title={title} />
          <Videos content={content} />
        </Surface>
      );
    case 'Affiliations':
      return <AffiliationsContent {...content} />;

    case 'Contact':
      return (
        <Surface>
          <ContentTitle title={`Get in touch with ${content.name}`} />
          <ContactForm {...content} />
        </Surface>
      );
    case 'Constitutional Law Reporter':
      return (
        <Surface>
          <ContentTitle title="Articles Published on Constitutional Law Reporter" />
          <BlogList content={content} />
        </Surface>
      );
    case 'Government & Law':
      return (
        <Surface>
          <ContentTitle title="Articles Published on Government & Law" />
          <BlogList content={content} />
        </Surface>
      );
    default:
      return <>Content not found..</>;
  }
};

const ObjectContent = ({ title, content }) => renderBody(title, content);

export default ObjectContent;
