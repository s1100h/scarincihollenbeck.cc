import App from 'next/app'

/**
*
* Bootstrap Resources
*
**/
import 'bootstrap/dist/css/bootstrap.min.css';

/** 
 * Util Sheets
 */
 import '../styles/utils/attorney-card.scss';
 import '../styles/utils/carousel.scss';
 import '../styles/utils/just-in-carousel.scss';
 import '../styles/utils/location-carousel.scss';
 import '../styles/utils/spacing-and-fonts.scss';
 import '../styles/utils/tabs.scss';

 /**
* Custom Style Sheets
**/
import '../styles/main.scss';
import '../styles/navigation.scss';
import '../styles/archive-attorney&admin.scss';
import '../styles/archive-location.scss';
import '../styles/archive-practice.scss';
import '../styles/single-admin&attorney&career&page&single.scss';
import '../styles/single-practice.scss';
import '../styles/subscription-form.scss';
import '../styles/firm-page.scss';

function SHApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default SHApp