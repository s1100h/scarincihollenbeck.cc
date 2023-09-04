import { Fragment, useId } from 'react';
import CardCannabisArticle from '../../molecules/cannabis-law/CardCannabisArticle';
import { CardsBlockContainer } from '../../../styles/practices-special-style/canabis-law/CardsBlock.style';

const CardsBlock = ({ cardsBlockData }) => (
  <CardsBlockContainer>
    <ul>
      {cardsBlockData.map(({ title, paragraph }, idx) => (
        <Fragment key={useId()}>
          <CardCannabisArticle title={title} number={idx + 1} paragraph={paragraph} />
        </Fragment>
      ))}
    </ul>
  </CardsBlockContainer>
);

export default CardsBlock;
