import { BannerContainer } from 'styles/HomeBanner';
import empty from 'is-empty';
import { JSXWithDynamicLinks } from '../../atoms/micro-templates/JSXWithDynamicLinks';

const HomeBanner = ({ lineOne, lineTwo, quote }) => (
  <BannerContainer>
    <div className="redBanner animate__animated animate__fadeInLeft animate__slow">
      <div className="homeBannerContainer">
        <div className="d-flex flex-column">
          <p className="text animate__animated animate__fadeInDown animate__slow">
            {lineOne}
          </p>
          {!empty(lineTwo) && (
            <h1 className="text animate__animated animate__fadeInDown animate__slow">
              <JSXWithDynamicLinks HTML={lineTwo} />
            </h1>
          )}
          <span className="quote">{quote}</span>
        </div>
      </div>
    </div>
  </BannerContainer>
);

export default HomeBanner;
