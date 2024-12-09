import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';
import { TitleH2, TitleH3 } from 'styles/common/Typography.style';
import {
  DescriptionArticlePrint,
  DescriptionSectionPrint,
} from 'styles/practices/PracticePrintPage.style';

const PracticeDescriptionPrint = ({ contentSection }) => (
  <DescriptionSectionPrint>
    <TitleH2>Description</TitleH2>

    {contentSection?.map((article) => (
      <DescriptionArticlePrint key={article.title}>
        <TitleH3>{article.title}</TitleH3>
        <div className="article-main">
          <JSXWithDynamicLinks HTML={article.content} print />
        </div>
      </DescriptionArticlePrint>
    ))}
  </DescriptionSectionPrint>
);

export default PracticeDescriptionPrint;
