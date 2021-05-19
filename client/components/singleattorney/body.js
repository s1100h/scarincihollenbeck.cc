import { createMarkup } from 'utils/helpers';

export default function AttorneyProfileBody({ content }) {
  return (
    <div className="mt-3 mb-5">
      <div dangerouslySetInnerHTML={createMarkup(content)} />
      <style jsx>{' div { font-size: 1.1rem;  } '}</style>
    </div>
  );
}
