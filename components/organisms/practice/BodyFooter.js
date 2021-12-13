import React from 'react';
import useInView from 'react-cool-inview';
// import dynamic from 'next/dynamic';
import RelatedAttorneys from 'components/molecules/practice/RelatedAttorneys';
import ClientSlider from 'components/molecules/practice/ClientSlider';
import lineStyles from 'styles/LineHeader.module.css';

// const ArticleHero = dynamic(() => import('components/molecules/practice/ArticleHero'));

const BodyFooter = ({
  attorneyList, highlightReal, chair, handleLink,
}) => {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  });
  return (
    <>
      {attorneyList.length > 0 && (
        <RelatedAttorneys
          members={attorneyList}
          chair={chair}
          handleLink={handleLink}
          title="Chair"
        />
      )}
      {highlightReal.length > 0 && (
        <div className="mt-5">
          <div className={`${lineStyles.lineHeader} my-4`}>
            <h3>Representative Clients</h3>
          </div>
          <ClientSlider content={highlightReal} />
        </div>
      )}
      {/* <div className="mt-5" ref={observe}>
        {inView && (
          <>
            <div className={`${lineStyles.lineHeader} my-4`}>
              <h3>Latest News & Articles</h3>
            </div>
            <ArticleHero blogId={blogId} />
          </>
        )}
      </div> */}
    </>
  );
};

export default BodyFooter;
