import { createMarkup } from 'utils/helpers';
import textStyles from 'styles/Text.module.css';
import fontStyles from 'styles/Fonts.module.css';

export default function CategoryHeader({ title, content }) {
  return (
    <div className="w-100">
      <h1 className={`${textStyles.redTitle} mb-2 text-uppercase display-4`}>
        <strong>
          {title}
        </strong>
      </h1>
      <h2
        dangerouslySetInnerHTML={createMarkup(content)}
        className={fontStyles.ft13remLineHeight15}
      />
      <hr className="py-2" />
    </div>
  );
}
