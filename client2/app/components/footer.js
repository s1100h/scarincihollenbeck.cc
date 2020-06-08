import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CookieConsentContainer from './cookie-consent';
import CarouselContainer from './Carousel';

function Footer({slides}) {
  return (
    <Container fluid className="bk--gray d-prin-none">
      <div className="just-in-container w-75">
        <CarouselContainer sliderType="JustInCarousel" slides={slides} />
      </div>
    </Container> 
  )
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/just-in/posts`, { headers });
  const slides = await response.json();

  return {
    props: {
      slides,
    },
  }
}


export default Footer
