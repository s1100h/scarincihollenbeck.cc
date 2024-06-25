import ErrorPage from 'components/pages/ErrorPage';
import { ERROR_PAGE_CONTENT } from 'utils/constants';

export default function Error({ statusCode }) {
  const title = `${statusCode} Error`;
  const subTitle = 'Something went wrong on the server.';
  const { mainMessage } = ERROR_PAGE_CONTENT;

  return statusCode ? (
    <ErrorPage title={title} subTitle={subTitle} mainMessage={mainMessage} />
  ) : (
    <ErrorPage
      title="Oops!"
      subTitle="Something went wrong on the client."
      mainMessage={mainMessage}
    />
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
