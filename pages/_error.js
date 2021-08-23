import ErrorPage from 'components/error-page';

export default function Error({ statusCode }) {
  const title = `${statusCode} Error`;
  const subTitle = 'Sorry, there was an issue getting your requested page';
  const mainMessage = 'It&apos;s possible you entered the address incorrectly, we moved the desired page, or there is an issue on our servers. Try searching our site to find what you are looking for.';
  return statusCode && <ErrorPage title={title} subTitle={subTitle} mainMessage={mainMessage} />;
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
