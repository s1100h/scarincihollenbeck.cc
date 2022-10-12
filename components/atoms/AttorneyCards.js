import textStyles from 'styles/Text.module.css';
import dynamic from 'next/dynamic';
import { CentralizedBox, ContainerXXL, RowSpecial } from 'styles/Containers.style';

const AttorneyCard = dynamic(() => import('components/shared/AttorneyCard'));

const AttorneyCards = (title, content) => (
  <ContainerXXL key={title}>
    <CentralizedBox toColumn="true">
      <RowSpecial>
        <h3 className={`${textStyles.redTitle} text-uppercase border-bottom mb-0`}>
          <strong>{title}</strong>
        </h3>
      </RowSpecial>
      <RowSpecial>
        {content.map((m) => (
          <AttorneyCard
            key={m.link}
            link={`/attorney${m.link}`}
            image={m.better_featured_image}
            name={m.title}
            title={m.designation}
            number={m.phone}
            email={m.email}
            width={80}
            height={112}
          />
        ))}
      </RowSpecial>
    </CentralizedBox>
  </ContainerXXL>
);

export default AttorneyCards;
