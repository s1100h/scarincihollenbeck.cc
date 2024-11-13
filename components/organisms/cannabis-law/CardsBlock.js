import { Fragment, useId } from 'react';
import CardCannabisArticle from '../../molecules/cannabis-law/CardCannabisArticle';
import { CardsBlockContainer } from '../../../styles/practices-special-style/canabis-law/CardsBlock.style';
import { FullHDContainer } from '../../../styles/practices-special-style/commonForSpecial.style';

const CardsBlock = ({ cardsBlockData }) => (
  <CardsBlockContainer>
    <h2 className="sr-only">Why Choose Our Cannabis Law Services</h2>
    <FullHDContainer>
      <div className="list-card-box">
        <ul>
          {cardsBlockData.map(({ title, paragraph }, idx) => (
            <Fragment key={useId()}>
              <CardCannabisArticle
                title={title}
                number={idx + 1}
                paragraph={paragraph}
              />
            </Fragment>
          ))}
        </ul>
      </div>
    </FullHDContainer>
  </CardsBlockContainer>
);

export default CardsBlock;
