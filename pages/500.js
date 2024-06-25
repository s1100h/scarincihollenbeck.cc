import ErrorPage from 'components/pages/ErrorPage';
import { ERROR_PAGE_CONTENT } from 'utils/constants';

const Custom500 = () => {
  const title = 'Oops!';
  const subTitle = 'Something went wrong.';
  const { mainMessage } = ERROR_PAGE_CONTENT;

  return (
    <ErrorPage title={title} subTitle={subTitle} mainMessage={mainMessage} />
  );
};

export default Custom500;
