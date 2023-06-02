import Image from 'next/image';
import { useRouter } from 'next/router';
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
}) => {
  const { push } = useRouter();
  return (
    <CardBox className={`${classNameProp}`} onClick={() => push(link)}>
      <Image src={image} width={width} height={height} alt={`Attorney, ${name}`} />
      <h4>{name}</h4>
      <p>{designation}</p>
      <ContactBoxTemplate email={email} number={number} />
    </CardBox>
  );
};

export default AttorneyPracticeCard;
