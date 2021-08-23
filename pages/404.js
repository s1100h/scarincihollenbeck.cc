import ErrorPage from 'components/error-page';

export default function Custom404() {
  const title = '404: Page Not Found';
  const subTitle = 'Sorry, the page you are looking for cannot be found.';
  const mainMessage = 'It&apos;s possible you entered the address incorrectly or we moved the desired page.Try searching our site to find what you are looking for.';

  return <ErrorPage title={title} subTitle={subTitle} mainMessage={mainMessage} />;
}
