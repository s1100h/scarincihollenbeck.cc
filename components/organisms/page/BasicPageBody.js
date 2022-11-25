import { createMarkup } from 'utils/helpers';

export default function PagesBody({ content }) {
  return (
    <>
      <div className="content" dangerouslySetInnerHTML={createMarkup(content)} />
      <br />
    </>
  );
}
