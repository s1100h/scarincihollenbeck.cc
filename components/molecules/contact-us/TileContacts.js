import Image from 'next/image';
import { TileBox } from '../../../styles/ContactUs.style';
import { JSXWithDynamicLinks } from '../../atoms/micro-templates/JSXWithDynamicLinks';

const TileContacts = ({
  title, textContent, icon, image,
}) => (
  <TileBox>
    {image ? (
      <div>
        <Image
          src={image}
          alt={title}
          blurDataURL={image}
          width={700}
          height={300}
        />
      </div>
    ) : (
      <div>
        <span>{icon}</span>
        {title && <h4>{title}</h4>}
        <p>
          <JSXWithDynamicLinks HTML={textContent} />
        </p>
      </div>
    )}
  </TileBox>
);

export default TileContacts;
