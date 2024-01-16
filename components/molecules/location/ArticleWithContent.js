import Image from 'next/image';
import empty from 'is-empty';
import { ArticleLocationBox } from '../../../styles/InfoBlockLocation.style';
import { JSXWithDynamicLinks } from '../../atoms/micro-templates/JSXWithDynamicLinks';

const ArticleWithContent = ({
  article,
  image,
  isBackgroundImage,
  children,
}) => {
  const backgroundImage = isBackgroundImage ? image : '';
  return (
    <ArticleLocationBox background={backgroundImage}>
      <div className="content-box">
        <p>
          <JSXWithDynamicLinks HTML={article} />
        </p>
        {!empty(children) && children}
      </div>
      {!isBackgroundImage && (
        <Image
          className="floated-image"
          src={image}
          alt="office"
          width={1004}
          height={308}
        />
      )}
    </ArticleLocationBox>
  );
};

export default ArticleWithContent;
