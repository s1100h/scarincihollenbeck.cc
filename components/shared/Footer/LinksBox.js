import Link from 'next/link';
import { LinkTitle, LinkList } from 'styles/Footer.style';
import empty from 'is-empty';

export const linkTemplate = (is_target_blank, slugLink, label) => {
  if (is_target_blank) {
    return (
      <a href={slugLink} target="_blank" rel="noreferrer">
        {label}
      </a>
    );
  }

  return <Link href={slugLink}>{label}</Link>;
};

export default function LinksBox({
  linksArr,
  title,
  isTargetBlank,
  classList,
}) {
  return (
    <div>
      {title && <LinkTitle>{title}</LinkTitle>}
      <LinkList className={!empty(classList) ? classList : ''}>
        {linksArr.map((link) => (
          <li key={link.id}>
            {linkTemplate(
              isTargetBlank,
              link.slug ? link.slug : link.url,
              link.label,
            )}
          </li>
        ))}
      </LinkList>
    </div>
  );
}
