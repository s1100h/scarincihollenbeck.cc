import Article from 'components/atoms/Article';
import dynamic from 'next/dynamic';
import { BlockListBox } from 'styles/Practices.style';
import { formatPageImageToCloudinaryUrl } from 'utils/helpers';
import PracticesTiles from './PracticesTiles';

const SimpleList = dynamic(() => import('components/molecules/practices/SimpleList'));

const BlockListWrapper = ({
  title, list, isBlock, isSimple, article,
}) => (
  <BlockListBox>
    {article && <Article title={title} contentBody={formatPageImageToCloudinaryUrl(article)} />}
    {isBlock && <PracticesTiles practicesList={list} />}
    {isSimple && <SimpleList list={list} />}
  </BlockListBox>
);

export default BlockListWrapper;
