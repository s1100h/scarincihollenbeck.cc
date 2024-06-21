import ErrorPage from '../pages/ErrorPage';

const CrashedContent = () => {
  const title = 'Oops!';
  const subTitle = 'This page encountered an error.';
  const mainMessage = 'Please return to our library to discover other news, updates, and articles.';
  return (
    <ErrorPage
      title={title}
      subTitle={subTitle}
      mainMessage={mainMessage}
      isErrorContent
    />
  );
};

export default CrashedContent;
