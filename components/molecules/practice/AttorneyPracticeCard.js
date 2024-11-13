import Image from 'next/image';
import { useRouter } from 'next/router';
import { PracticeAttorneysCard } from 'styles/practices/PracticeAttorneys';
import { useEffect, useRef, useState } from 'react';
import useStateScreen from 'hooks/useStateScreen';
import Link from 'next/link';
import ContactBoxTemplate from '../../atoms/ContactBox';

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
  officeLocations,
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
      ref={cardRef}
    >
      <Link href={link} className="attorney__link" aria-label={name} />
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
          <h3>{name}</h3>
          <p>{designation}</p>
          <div className="attorney__contact">
            <ContactBoxTemplate
              email={email}
              number={number}
              officeLocations={officeLocations}
            />
          </div>
        </button>
      ) : (
        <div className="attorney__content">
          <h3>{name}</h3>
          <p>{designation}</p>
          <div className="attorney__contact">
            <ContactBoxTemplate
              email={email}
              number={number}
              officeLocations={officeLocations}
            />
          </div>
        </div>
      )}
    </PracticeAttorneysCard>
  );
};

export default AttorneyPracticeCard;
