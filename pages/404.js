import ErrorPage from 'components/pages/ErrorPage';
import { ERROR_PAGE_CONTENT } from 'utils/constants';

const Custom404 = () => {
  const title = 'Oops!';
  const subTitle = 'Page not found.';
  const { mainMessage } = ERROR_PAGE_CONTENT;

  return (
    <ErrorPage title={title} subTitle={subTitle} mainMessage={mainMessage} />
  );
};

export default Custom404;
