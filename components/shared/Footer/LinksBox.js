import Link from 'next/link';
import { LinkTitle, LinkList } from 'styles/Footer.style';

export default function LinksBox({ linksArr, title, isTargetBlank }) {
  const linkTemplate = (is_target_blank, slugLink, label) => {
    if (is_target_blank) {
      return (
        <a href={slugLink} target="_blank" rel="noreferrer">
          {label}
        </a>
      );
    }

    return (
      <Link href={slugLink}>
        <a>{label}</a>
      </Link>
    );
  };

  return (
    <div>
      {title && (
        <LinkTitle>
          <strong>{title}</strong>
        </LinkTitle>
      )}
      <LinkList>
        {linksArr.map((link) => (
          <li key={link.id}>
            {linkTemplate(isTargetBlank, link.slug ? link.slug : link.url, link.label)}
          </li>
        ))}
      </LinkList>
    </div>
  );
}
