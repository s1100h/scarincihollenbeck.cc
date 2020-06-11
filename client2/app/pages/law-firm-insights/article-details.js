import Link from 'next/link';

export default function ArticleDetails(props) {
  const { author, date } = props;

  return (
    <>
      <strong>Author: </strong>
      {
        (author.length > 0) ? author.map((a, i) => ((i === 0 && author.length > 1) ? (
          <Link href={a.link} key={a.name}>
            <a className="text-underline">
              {a.name}
              ,{' '}
            </a>
          </Link>          
        ) : (
          <Link href={a.link} key={a.name}>
            <a className="text-underline">{a.name}</a>
          </Link>
        ))) : ''
      }
      <span className="mx-3">|</span>
      {
        (date) || ''
      }
    </>
  );
}