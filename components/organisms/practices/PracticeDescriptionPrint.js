import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';
import { Title32, Title20 } from 'styles/common/Typography.style';
import {
  DescriptionArticlePrint,
  DescriptionSectionPrint,
} from 'styles/practices/PracticePrintPage.style';

const PracticeDescriptionPrint = ({ contentSection }) => (
  <DescriptionSectionPrint>
    <Title32>Description</Title32>

    {contentSection?.map((article) => (
      <DescriptionArticlePrint key={article.title}>
        <Title20>{article.title}</Title20>
        <div className="article-main">
          <JSXWithDynamicLinks HTML={article.content} print />
        </div>
      </DescriptionArticlePrint>
    ))}
  </DescriptionSectionPrint>
);

export default PracticeDescriptionPrint;
