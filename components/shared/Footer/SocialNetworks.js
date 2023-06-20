import { SocialLinks, LinkTitle, ContactsBox } from 'styles/Footer.style';
import { SOCIAL_MEDIA_LINKS } from 'utils/constants';

export default function SocialNetworks() {
  return (
    <ContactsBox>
      <LinkTitle>Social Media</LinkTitle>
      <SocialLinks>
        {SOCIAL_MEDIA_LINKS.map(({
          id, url, label, icon,
        }) => (
          <li key={id}>
            <a href={url} target="_blank" rel="noreferrer">
              {icon}
              {label}
            </a>
          </li>
        ))}
      </SocialLinks>
    </ContactsBox>
  );
}
