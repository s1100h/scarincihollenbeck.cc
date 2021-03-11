import { createMarkup } from 'utils/helpers';

export default function CustomContent({ content }) {
  return content.map((c) => (
    <div key={c.title} className="mb-5">
      <div dangerouslySetInnerHTML={createMarkup(c.body)} />
    </div>
  ));
}