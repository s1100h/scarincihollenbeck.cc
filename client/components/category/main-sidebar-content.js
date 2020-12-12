import Image from 'next/image';

export default function CategoryMainSidebar({ latest }) {
  return (
    <ul className="no-dots mx-3 mt-0">
      {latest.map((val) => (
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
      ))}
    </ul>
  );
}
