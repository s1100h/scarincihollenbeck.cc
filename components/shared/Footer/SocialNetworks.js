import { SocialLinks, LinkTitle, FooterColumn } from 'styles/Footer.style';
import { SOCIAL_LINKS } from 'utils/constants';

export default function SocialNetworks() {
  return (
    <FooterColumn>
      <LinkTitle>Social Media</LinkTitle>
      <SocialLinks>
        {SOCIAL_LINKS.map(({
          id, url, title, icon,
        }) => (
          <li key={id}>
            <a href={url} target="_blank" rel="noreferrer">
              <span className="icon">{icon}</span>
              {title}
            </a>
          </li>
        ))}
      </SocialLinks>
    </FooterColumn>
  );
}
