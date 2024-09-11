import { ContainerDefault } from 'styles/Containers.style';
import { Fragment } from 'react';
import { UnderlinedLink } from 'styles/Buttons.style';
import { slogans } from 'utils/constants';
import { getIcon } from 'utils/helpers';
import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';
import {
  Banner,
  BannerCard,
  BannerCardContent,
  BannerCardHeader,
  BannerCardIcon,
  BannerCards,
  BannerCardTitle,
  BannerImage,
  BannerSlogan,
  BannerSlogans,
  BannerText,
  BannerTitle,
} from 'styles/HomeBanner.style';
import { FaDiamond } from 'react-icons/fa6';
import empty from 'is-empty';
import { DiamondSeparator } from '../../../styles/Separators.style';

const HomeBanner = ({ title, subtitle, infoCards }) => (
  <Banner data-testid="home-banner">
    <BannerImage
      src="/images/home-page-banner.webp"
      alt="Building on the background"
      fill
      priority
      loading="eager"
      quality={70}
    />
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
              >
                <FaDiamond />
              </DiamondSeparator>
            )}
          </Fragment>
        ))}
      </BannerSlogans>
      {!empty(title) && (
        <BannerTitle className="animate__animated animate__fadeInDown animate__slow">
          <JSXWithDynamicLinks HTML={title} />
        </BannerTitle>
      )}

      <BannerText className="animate__animated animate__fadeInDown animate__slow">
        {subtitle}
      </BannerText>

      <BannerCards data-testid="banner-cards">
        {infoCards?.map(({
          fieldGroupName, title, icon, cardsText, link,
        }) => (
          <BannerCard key={`${fieldGroupName}-${title}`}>
            <BannerCardHeader>
              <BannerCardIcon className="icon">{getIcon(icon)}</BannerCardIcon>
              <BannerCardTitle>{title}</BannerCardTitle>
            </BannerCardHeader>

            <BannerCardContent>
              <JSXWithDynamicLinks HTML={cardsText} />
            </BannerCardContent>

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
