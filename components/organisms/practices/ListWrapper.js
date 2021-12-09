import lineHeaderStyles from 'styles/LineHeader.module.css';
import dynamic from 'next/dynamic';

const BlockList = dynamic(() => import('components/molecules/practices/BlockList'));
const SimpleList = dynamic(() => import('components/molecules/practices/SimpleList'));

const BlockListWrapper = ({
  title, list, isBlock, isSimple,
}) => (
  <>
    <div className="mt-4 px-0">
      <div className={lineHeaderStyles.lineHeader}>
        <h3>{title}</h3>
      </div>
    </div>
    {isBlock && <BlockList list={list} />}
    {isSimple && <SimpleList list={list} />}
  </>
);

export default BlockListWrapper;
