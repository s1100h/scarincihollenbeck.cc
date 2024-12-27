import empty from 'is-empty';
import ContentRender from 'components/atoms/ContentRender';
import { Title20 } from 'styles/common/Typography.style';
import { KeyPointsSection, KeyPointsArticle } from 'styles/KeyPoints.style';

const KeyPoints = ({ items }) => (
  <KeyPointsSection>
    {items.map(({ subtitle, title, content }) => (
      <KeyPointsArticle key={title}>
        {!empty(subtitle) && <Title20>{subtitle}</Title20>}
        <ContentRender content={content} />
      </KeyPointsArticle>
    ))}
  </KeyPointsSection>
);

export default KeyPoints;
