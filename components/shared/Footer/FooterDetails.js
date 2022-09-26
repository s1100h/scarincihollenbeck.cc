import Link from 'next/link';
import Image from 'next/image';
import { DetailsContainer, BottomLinks } from 'styles/Footer.style';

export default function FooterDetails() {
  const currentYear = new Date().getFullYear();
  return (
    <DetailsContainer>
      <div>
        <div>
          <Image
            src="/images/scarinci-hollenbeck-diamond-badge-SVG.svg"
            alt="sh diamond logo favicon"
            width={100}
            height={100}
          />
        </div>
        <article>
          <h6>ATTORNEY ADVERTISING</h6>
          <p>
            Prior results do not guarantee a similar outcome. @
            {currentYear}
            , Scarinci Hollenbeck,
            LLC, all rights reserved
          </p>
        </article>
      </div>
      <BottomLinks>
        <li>
          <Link href="/privacy-policy">
            <a>Privacy policy</a>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link href="/terms-of-use">
            <a>Terms of use</a>
          </Link>
        </li>
      </BottomLinks>
    </DetailsContainer>
  );
}
