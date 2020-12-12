import Link from 'next/link';
import Image from 'next/image';

export default function CategoryMainArticlesContainer({ main }) {
  return (
    <article>
      {main.map((val) => (
        <div className="main" key={val.title}>
          <Link href={val.link}>
            <a>
              <Image
                src={
                  val.image
                  || '/image/no-image-found-diamond.png'
                }
                width={300}
                height={150}
                layout="intrinsic"
                alt={val.title}
              />
            </a>
          </Link>
          <p className="mt-5 mb-4">
            <Link href={val.category.link}>
              <a className="text-muted ft-01 text-uppercase">
                {val.category.name}
              </a>
            </Link>
          </p>
          <h1 className="mb-4 mt-3 display-4">
            <Link href={val.link}>
              <a>{val.title}</a>
            </Link>
          </h1>
          <p className="text-muted mt-4 mb-4 mr-4">{val.excerpt}</p>
          <hr />
          <p className="mt-4 mb-4 ft-13">
            <span className="text-black">BY </span>
            {val.author.map((a, indx) => (indx < val.author.length - 1 ? (
              <a
                key={a.name}
                href={a.link}
                className="text-black text-uppercase"
              >
                <u>{`${a.name},`}</u>
                {' '}
              </a>
            ) : (
              <a
                key={a.name}
                href={a.link}
                className="text-black text-uppercase"
              >
                <u>{a.name}</u>
              </a>
            )))}
          </p>
        </div>
      ))}
    </article>
  );
}
