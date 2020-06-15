import { createMarkup } from '../../utils/helpers';

export default function CategoryHeader(props) {
  const { title, content } = props;

  return (
    <div className="w-100" id="category-header">
      <h1 className="proxima-bold red-title mb-2">
        {title}
      </h1>
      <div dangerouslySetInnerHTML={createMarkup(content)} className="proxima-regular" />
      <hr className="mt-1 pt-1" />
    </div>
  );
}