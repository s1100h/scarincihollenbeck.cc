import {
  Banner,
  BannerCard,
  BannerCardContent,
  BannerCardHeader,
  BannerCardIcon,
  BannerCards,
  BannerCardTitle,
  BannerSlogan,
  BannerSlogans,
  BannerText,
  BannerTitle,
} from 'styles/HomeBanner';
import { ContainerDefault } from 'styles/Containers.style';
import { Fragment } from 'react';
import { UnderlinedLink } from 'styles/Buttons.style';
import { slogans } from 'utils/constants';
import { getIcon } from 'utils/helpers';
import { DiamondSeparator } from '../../../styles/Separators.style';

const HomeBanner = ({ title, subtitle, infoCards }) => (
  <Banner>
    <ContainerDefault>
      <BannerSlogans>
        {slogans?.map((slogan, index) => (
          <Fragment key={slogan}>
            <BannerSlogan className="animate__animated animate__fadeInDown animate__slow">
              {slogan}
            </BannerSlogan>
            {index !== slogans.length - 1 && (
              <DiamondSeparator
                key={`${slogan}-separator`}
                as="li"
                className="animate__animated animate__fadeInDown animate__slow"
              />
            )}
          </Fragment>
        ))}
      </BannerSlogans>
      <BannerTitle className="animate__animated animate__fadeInDown animate__slow">
        {title}
      </BannerTitle>

      <BannerText className="animate__animated animate__fadeInDown animate__slow">
        {subtitle}
      </BannerText>

      <BannerCards>
        {infoCards?.map(({
          fieldGroupName, title, icon, cardsText, link,
        }) => (
          <BannerCard key={`${fieldGroupName}-${title}`}>
            <BannerCardHeader>
              <BannerCardIcon className="icon">{getIcon(icon)}</BannerCardIcon>
              <BannerCardTitle>{title}</BannerCardTitle>
            </BannerCardHeader>

            <BannerCardContent>{cardsText}</BannerCardContent>

            <UnderlinedLink href={link?.url} className="link">
              {link?.title}
            </UnderlinedLink>
          </BannerCard>
        ))}
      </BannerCards>
    </ContainerDefault>
  </Banner>
);

export default HomeBanner;
