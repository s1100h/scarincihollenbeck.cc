import Image from 'next/image';
import { useRouter } from 'next/router';
import { PracticeAttorneysCard } from 'styles/practices/PracticeAttorneys';
import { useEffect, useRef, useState } from 'react';
import useStateScreen from 'hooks/useStateScreen';
import ContactBoxTemplate from '../../atoms/ContactBox';
import { CardBox } from '../../../styles/Practices.style';

const AttorneyPracticeCard = ({
  link,
  image,
  name,
  designation,
  number,
  email,
  width,
  height,
  classNameProp,
  handleCardParams,
}) => {
  const { push } = useRouter();
  const [isActive, setIsActive] = useState(false);
  const { isBigTabletScreen } = useStateScreen();
  const cardRef = useRef();

  const handleClickContent = (e) => {
    e.stopPropagation();
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (handleCardParams && cardRef.current) {
      handleCardParams(
        cardRef.current.clientWidth,
        cardRef.current.clientHeight,
      );
    }
  }, [handleCardParams]);

  return (
    <PracticeAttorneysCard
      className={`${classNameProp} ${isActive ? 'active' : ''}`}
      onClick={() => push(link)}
      ref={cardRef}
    >
      <div className="attorney__image">
        <Image
          src={image}
          width={width}
          height={height}
          alt={`Attorney, ${name}`}
        />
      </div>
      {isBigTabletScreen ? (
        <button
          className="attorney__content"
          onClick={(e) => handleClickContent(e)}
        >
          <h4>{name}</h4>
          <p>{designation}</p>
          <div className="attorney__contact">
            <ContactBoxTemplate email={email} number={number} />
          </div>
        </button>
      ) : (
        <div className="attorney__content">
          <h4>{name}</h4>
          <p>{designation}</p>
          <div className="attorney__contact">
            <ContactBoxTemplate email={email} number={number} />
          </div>
        </div>
      )}
    </PracticeAttorneysCard>
  );
};

export default AttorneyPracticeCard;
