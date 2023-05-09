import ErrorPage from 'components/pages/ErrorPage';
import { ERROR_PAGE_CONTENT } from 'utils/constants';

const Custom404 = () => {
  const title = 'Oops!: PAGE NOT FOUND';
  const { mainMessage } = ERROR_PAGE_CONTENT;

  return <ErrorPage title={title} mainMessage={mainMessage} />;
};

export default Custom404;
