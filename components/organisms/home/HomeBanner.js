import {
  Banner,
  BannerCard,
  BannerCardContent,
  BannerCardHeader,
  BannerCardIcon,
  BannerCardLink,
  BannerCards,
  BannerCardTitle,
  BannerSlogan,
  BannerSlogans,
  BannerText,
  BannerTitle,
} from 'styles/HomeBanner';
import { ContainerDefault } from 'styles/Containers.style';
import AttorneysIcon from 'components/common/icons/AttorneysIcon';
import PracticesIcon from 'components/common/icons/PracticesIcon';
import IndustriesIcon from 'components/common/icons/IndustriesIcon';
import { Fragment } from 'react';

const slogans = ['Since 1988', 'Distinct Vision', 'Real Impact'];

const HomeBanner = ({ lineOne, lineTwo, quote }) => (
  <Banner>
    <ContainerDefault>
      <BannerSlogans>
        {slogans?.map((slogan, index) => (
          <Fragment key={slogan}>
            <BannerSlogan className="animate__animated animate__fadeInDown animate__slow">
              {slogan}
            </BannerSlogan>
            {index !== slogans.length - 1 && (
              <BannerSlogan
                key={`${slogan}-separator`}
                className="slogan-separator animate__animated animate__fadeInDown animate__slow"
              />
            )}
          </Fragment>
        ))}
      </BannerSlogans>
      <BannerTitle className="animate__animated animate__fadeInDown animate__slow">
        Decades of Legal Experience with Recognized Results
      </BannerTitle>

      <BannerText className="animate__animated animate__fadeInDown animate__slow">
        Our mission is to deliver outstanding client service through our
        commitment to excellence.
      </BannerText>

      <BannerCards>
        <BannerCard>
          <BannerCardHeader>
            <BannerCardIcon className="icon">
              <AttorneysIcon />
            </BannerCardIcon>
            <BannerCardTitle>ATTORNEYS</BannerCardTitle>
          </BannerCardHeader>

          <BannerCardContent>
            <p>
              Scarinci Hollenbeck, LLC is proud to offer over 60 experienced
              attorneys with expertise in the niche areas of law most commonly
              required by businesses operating in emerging economies.
            </p>

            <p>
              Our attorneys serve clients from a variety of industries on
              numerous issues.
            </p>
          </BannerCardContent>

          <BannerCardLink href="/attorneys" className="link">
            Open attorneys page
          </BannerCardLink>
        </BannerCard>

        <BannerCard>
          <BannerCardHeader>
            <BannerCardIcon className="icon">
              <PracticesIcon />
            </BannerCardIcon>
            <BannerCardTitle>practices</BannerCardTitle>
          </BannerCardHeader>

          <BannerCardContent>
            <p>
              We are committed to providing our clients with the highest quality
              of service possible and tailor our representation to each client`s
              unique needs.
            </p>

            <p>Contact us today to learn more about how we can help you.</p>
          </BannerCardContent>

          <BannerCardLink href="/practices" className="link">
            Open practices page
          </BannerCardLink>
        </BannerCard>

        <BannerCard>
          <BannerCardHeader>
            <BannerCardIcon className="icon">
              <IndustriesIcon />
            </BannerCardIcon>
            <BannerCardTitle>industries</BannerCardTitle>
          </BannerCardHeader>

          <BannerCardContent>
            <p>
              The Scarinci Hollenbeck meet customer needs in our core areas such
              as:
            </p>

            <ul>
              <li>litigation,</li>
              <li>commercial real estate,</li>
              <li>taxes,</li>
              <li>intellectual property,</li>
              <li>labor and employment, and more.</li>
            </ul>
          </BannerCardContent>

          <BannerCardLink href="/industries" className="link">
            Open industries page
          </BannerCardLink>
        </BannerCard>
      </BannerCards>
    </ContainerDefault>
  </Banner>
);

export default HomeBanner;
