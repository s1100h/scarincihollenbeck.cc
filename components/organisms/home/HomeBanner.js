import { BannerContainer } from 'styles/HomeBanner';

const HomeBanner = ({ lineOne, lineTwo, quote }) => (
  <BannerContainer>
    <div className="redBanner animate__animated animate__fadeInLeft animate__slow">
      <div className="homeBannerContainer">
        <div className="d-flex">
          <div>
            <p className="text animate__animated animate__fadeInDown animate__slow">{lineOne}</p>
            <p className="text animate__animated animate__fadeInDown animate__slow">{lineTwo}</p>
            <span className="quote">{quote}</span>
          </div>
        </div>
      </div>
    </div>
  </BannerContainer>
);

export default HomeBanner;
