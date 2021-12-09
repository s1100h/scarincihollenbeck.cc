import grayTitleStyles from 'styles/BigGrayTitle.module.css';

const ContentTitle = ({ title }) => (
  <p className={`${grayTitleStyles.title} text-capitalize w-100`}>{title}</p>
);
export default ContentTitle;
