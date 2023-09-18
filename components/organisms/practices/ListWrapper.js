import Article from 'components/atoms/Article';
import dynamic from 'next/dynamic';
import { Title } from 'styles/Article.style';
import { BlockListBox } from 'styles/Practices.style';
import { formatPageImageToCloudinaryUrl } from 'utils/helpers';
import PracticesTiles from './PracticesTiles';

const BlockList = dynamic(() => import('components/molecules/practices/BlockList'));
const SimpleList = dynamic(() => import('components/molecules/practices/SimpleList'));

const BlockListWrapper = ({
  title, list, isBlock, isSimple, article,
}) => (
  <BlockListBox>
    <Title props={{ size: '2rem' }}>{title}</Title>
    {article && <Article contentBody={formatPageImageToCloudinaryUrl(article)} />}
    {/* {isBlock && <BlockList list={list} />} */}
    {isBlock && <PracticesTiles practicesList={list} />}
    {isSimple && <SimpleList list={list} />}
  </BlockListBox>
);

export default BlockListWrapper;
