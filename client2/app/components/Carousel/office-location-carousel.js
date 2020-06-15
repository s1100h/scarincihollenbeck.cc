
import Link from 'next/link';
import LazyLoad from 'react-lazyload';

export default function OfficeLocationCarousel(props) {
  const { post } = props;
  const { slug, featuredImg, title } = post;

  return (
    <div className="location-card mx-auto d-block border">
      <Link href={slug}>
        <a>
          <LazyLoad height={150}>
            <img rel="preconnect" src={featuredImg} alt={title} className="mw-100 mx-auto d-block" />
          </LazyLoad>
          <p className="red-title m-3 text-uppercase">
            <strong>{title}</strong>
          </p>
        </a>
      </Link>
    </div>
  );
}