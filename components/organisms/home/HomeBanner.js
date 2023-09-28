import { BannerContainer } from 'styles/HomeBanner';
import { useEffect, useState } from 'react';
import empty from 'is-empty';
import { JSXWithDynamicLinks } from '../../atoms/micro-templates/JSXWithDynamicLinks';
import { isHTML } from '../../../utils/helpers';

const HomeBanner = ({ lineOne, lineTwo, quote }) => {
  const [lineTwoState, setLineTwo] = useState();

  useEffect(() => {
    if (isHTML(lineTwo)) {
      setLineTwo(lineTwo);
    }
  }, [lineTwo]);

  return (
    <BannerContainer>
      <div className="redBanner animate__animated animate__fadeInLeft animate__slow">
        <div className="homeBannerContainer">
          <div className="d-flex flex-column">
            <p className="text animate__animated animate__fadeInDown animate__slow">{lineOne}</p>
            {!empty(lineTwoState) && (
              <div className="text animate__animated animate__fadeInDown animate__slow">
                <JSXWithDynamicLinks HTML={lineTwoState} />
              </div>
            )}
            <span className="quote">{quote}</span>
          </div>
        </div>
      </div>
    </BannerContainer>
  );
};

export default HomeBanner;
