import Link from 'next/link';
import { LinkTitle, LinkList, FooterColumn } from 'styles/Footer.style';
import empty from 'is-empty';

const linkTemplate = (is_target_blank, slugLink, label) => {
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
    <FooterColumn>
      {title && <LinkTitle>{title}</LinkTitle>}
      <LinkList className={!empty(classList) ? classList : ''}>
        {linksArr.map((link) => (
          <li key={link?.id || link?.databaseId}>
            {linkTemplate(
              isTargetBlank,
              link?.slug ? link?.slug : link?.url || link?.uri,
              link?.label || link?.title,
            )}
          </li>
        ))}
      </LinkList>
    </FooterColumn>
  );
}
