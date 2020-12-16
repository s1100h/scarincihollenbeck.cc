import Image from 'next/image';
import Link from 'next/link';

export default function CategoryMainSidebar({ latest }) {
  console.log(latest)
  return (
    <ul className="mt-3 p-0">
      {latest.map((p) => (
        <li key={p.node.id} className="w-100 mb-5">
          <Link href={p.node.link}>
            <a className="text-dark">
              <Image
                src={p.node.featuredImage.node.sourceUrl || '/image/no-image-found-diamond.png'}
                width={300}
                height={150}
                layout="intrinsic"
                alt={p.node.link}
              />
            </a>
          </Link>
        </li>
      ))}
      {/* {latest.map((val) => (
        <li key={val.title} className="w-100 mb-5">
          <a href={val.link}>
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
            <h5 className="mt-3 mb-1">{val.title}</h5>
            <p className="text-muted small-excerpt">{val.excerpt}</p>
          </a>
        </li>
      ))} */}
      <li>We'll get there..</li>
    </ul>
  );
}
