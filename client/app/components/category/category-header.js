import { createMarkup, makeTitle } from '../../utils/helpers';

export default function CategoryHeader(props) {
  const { title, content } = props;
  const categorySlug = title.split('/');
  const categoryTitle = categorySlug[categorySlug.length - 1];

  return (
    <div className="w-100" id="category-header">
      <h1 className="proxima-bold red-title mb-2">
        {makeTitle(categoryTitle)}
      </h1>
      <h2 dangerouslySetInnerHTML={createMarkup(content)} className="proxima-regular category-description" />
      <hr className="mt-1 pt-1" />
    </div>
  );
}
