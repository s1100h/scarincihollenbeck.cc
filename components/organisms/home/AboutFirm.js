import {
  AboutBlock,
  AboutBlocks,
  AboutCard,
  AboutCardContent,
  AboutCardDescription,
  AboutCardImage,
  AboutCardTitle,
  AboutDescription,
  AboutSection,
  AboutSeparator,
  AboutTitle,
} from 'styles/AboutFirm.style';
import { useMemo } from 'react';
import { ContainerDefault } from 'styles/Containers.style';
import Image from 'next/image';
import { SITE_TITLE } from 'utils/constants';
import SHDiamond from '../../../public/images/sh-mini-diamond-PNG.svg';

const AboutFirm = ({ infos, linksBtn }) => {
  const content = useMemo(() => ({ infos, linksBtn }), [infos, linksBtn]);
  return (
    <AboutSection>
      <ContainerDefault>
        <AboutBlocks>
          <AboutBlock>
            <AboutTitle>Who we are?</AboutTitle>
            <AboutDescription>
              <p>
                Unique problems require tailored solutions. Whether you’re a
                small business or a Fortune 500 company, every business comes
                with its own set of obstacles requiring specialized attention.
              </p>
              <p>
                Scarinci Hollenbeck maintains a roster of attorneys dedicated to
                creatively addressing client needs in our core areas such as:
              </p>

              <ul>
                <li>Business Transactions,</li>
                <li>Commercial Real Estate,</li>
                <li>Litigation,</li>
                <li>Intellectual Property,</li>
                <li>Mergers & Acquisitions,</li>
                <li>Tax, and more.</li>
              </ul>

              <p>
                The combination of decades of experience and a deep
                understanding of the law has enabled us to develop
                <strong> a Distinct Vision </strong>
                for how we approach complex problems on behalf of our clients.
              </p>
            </AboutDescription>
          </AboutBlock>
          <AboutSeparator>
            <Image
              alt={`${SITE_TITLE}, LLC`}
              width={40}
              height={40}
              src={SHDiamond}
            />
          </AboutSeparator>
          <AboutBlock>
            <AboutCard>
              <AboutCardImage>
                <Image
                  src="/images/about-photo.jpg"
                  width={280}
                  height={374}
                  alt="Donald Scarinci"
                />
              </AboutCardImage>
              <AboutCardContent>
                <AboutCardDescription>
                  <p>
                    Donald Scarinci is the Founding Partner of Scarinci
                    Hollenbeck. He writes and lectures extensively about
                    Constitutional Law and edits the award-winning, The
                    Constitutional Law Reporter.
                  </p>
                  <p>
                    His practice focuses on representing public institutions and
                    businesses that interact with government.
                  </p>
                </AboutCardDescription>

                <AboutCardTitle>Donald Scarinci</AboutCardTitle>
              </AboutCardContent>
            </AboutCard>
          </AboutBlock>
        </AboutBlocks>
      </ContainerDefault>
    </AboutSection>
  );
};

export default AboutFirm;
