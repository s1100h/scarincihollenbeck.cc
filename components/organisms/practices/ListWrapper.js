import dynamic from 'next/dynamic';

const BlockList = dynamic(() => import('components/molecules/practices/BlockList'));
const SimpleList = dynamic(() => import('components/molecules/practices/SimpleList'));

const BlockListWrapper = ({
  title, list, isBlock, isSimple,
}) => (
  <div className="mt-5">
    <h3 className="ml-3 font-weight-bold">{title}</h3>
    {isBlock && <BlockList list={list} />}
    {isSimple && <SimpleList list={list} />}
  </div>
);

export default BlockListWrapper;
