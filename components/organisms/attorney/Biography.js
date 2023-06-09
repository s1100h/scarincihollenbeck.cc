import Surface from '../../atoms/micro-templates/surface';
import ContentTitle from '../../atoms/ContentTitle';
import { ArticleBody } from '../../../styles/Article.style';
import { JSXWithDynamicLinks } from '../../atoms/micro-templates/JSXWithDynamicLinks';
import Clients from '../../common/Clients';

const Biography = ({ content }) => {
  const { bio, clients } = content;
  return (
    <Surface unscrollable="true">
      <ContentTitle title="Biography" />
      <ArticleBody>
        <JSXWithDynamicLinks HTML={bio} />
      </ArticleBody>
      {clients && clients.length > 0 && <Clients title="Clients" clients={clients} />}
    </Surface>
  );
};

export default Biography;
