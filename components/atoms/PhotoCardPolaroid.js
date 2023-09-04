import Image from 'next/image';
import empty from 'is-empty';
import { PhotoCardFigure } from '../../styles/PhotoCardPolaroid.style';
import { JSXWithDynamicLinks } from './micro-templates/JSXWithDynamicLinks';

const PhotoCardPolaroid = ({
  imgAlt, imgUrl, capture, isBlackBack, children,
}) => {
  const isBackgroundBlack = isBlackBack ? 'true' : '';
  return (
    <PhotoCardFigure isBlackBackground={isBackgroundBlack}>
      <Image src={imgUrl} alt={imgAlt} width={360} height={400} loading="lazy" />
      {!empty(capture) && (
        <caption className="d-none">
          <JSXWithDynamicLinks HTML={capture} />
        </caption>
      )}
      {children}
    </PhotoCardFigure>
  );
};

export default PhotoCardPolaroid;
