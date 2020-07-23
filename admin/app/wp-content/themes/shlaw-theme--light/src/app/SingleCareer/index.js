import React from 'react';
import ReactDOM from 'react-dom';
import SingleCareer from './SingleCareer';

/**
*
* Bootstrap Resources
*
* */
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Util Sheets
 */
import '../styles/utils/carousel.scss';
import '../styles/utils/location-carousel.scss';
import '../styles/utils/spacing-and-fonts.scss';
import '../styles/utils/tabs.scss';

/**
* Custom Style Sheets
* */
import '../styles/main.scss';
import '../styles/navigation.scss';

import '../styles/single-admin&attorney&career&page&single.scss';

ReactDOM.render(<SingleCareer />, document.getElementById('single-career'));