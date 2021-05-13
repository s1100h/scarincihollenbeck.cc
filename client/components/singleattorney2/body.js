import { createMarkup } from 'utils/helpers';

export default function AttorneyProfileBody({ content }) {
  return (
    <>
      <div dangerouslySetInnerHTML={createMarkup(content)} />
      <style jsx>{' div { font-size: 1.15rem; margin-top: 1em; }'}</style>
    </>
  );
}
