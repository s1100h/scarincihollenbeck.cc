import empty from 'is-empty';
import FirmIcon from 'components/common/icons/FirmIcon';
import LibraryIcon from 'components/common/icons/LibraryIcon';
import LocationsIcon from 'components/common/icons/LocationsIcon';
import IndustriesIcon from 'components/common/icons/IndustriesIcon';
import PracticesIcon from 'components/common/icons/PracticesIcon';
import AttorneysIcon from 'components/common/icons/AttorneysIcon';
import HomeIcon from 'components/common/icons/HomeIcon';
import CareersIcon from 'components/common/icons/CareersIcon';
import CannabisIcon from 'components/common/icons/CannabisIcon';
import FoodIcon from 'components/common/icons/FoodIcon';
import MailingListIcon from 'components/common/icons/MailingListIcon';
import MediaIcon from 'components/common/icons/MediaIcon';
import PaymentIcon from 'components/common/icons/PaymentIcon';
import PostsIcon from 'components/common/icons/PostsIcon';
import RealEstateIcon from 'components/common/icons/RealEstateIcon';
import TransportationIcon from 'components/common/icons/TransportationIcon';
import BankingIcon from 'components/common/icons/BankingIcon';
import BrainIcon from 'components/common/icons/BrainIcon';
import BriefcaseIcon from 'components/common/icons/BriefcaseIcon';
import DocumentsIcon from 'components/common/icons/DocumentsIcon';
import EnvironmentalIcon from 'components/common/icons/EnvironmentalIcon';
import TaxIcon from 'components/common/icons/TaxIcon';
import GlobeIcon from 'components/common/icons/GlobeIcon';
import BulbIcon from 'components/common/icons/BulbIcon';
import GovernmentIcon from 'components/common/icons/GovernmentIcon';
import GamingIcon from 'components/common/icons/GamingIcon';
import {
  CLOUDINARY_BASE_URL,
  EMAGE_UPLOAD_CLOUDINARY,
  OFFICE_LOCATIONS,
  PRODUCTION_URL,
} from './constants';
import CheckIcon from '../components/common/icons/CheckIcon';
import MapIcon from '../components/common/icons/MapIcon';
import ScopeIcon from '../components/common/icons/ScopeIcon';

// this is HTML checker
export function isHTML(text) {
  const htmlRegex = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/i;
  return htmlRegex.test(text);
}
// sort a list by its key
export function sortByKey(list, key) {
  if (list !== undefined) {
    list.sort((a, b) => {
      if (a[key] > b[key]) {
        return 1;
      }
      if (a[key] < b[key]) {
        return -1;
      }
      return 0;
    });
  }

  return list;
}

export const convertBooleanToString = (booleanArg) => (booleanArg ? 'true' : '');

// take a term lower case and replace white spaces with dashes
export const urlify = (str) => str.toLowerCase().replace(/\s/g, '-');

// create mark up
export const createMarkup = (content) => ({ __html: content });

export const cutDomain = (url) => url.replace(PRODUCTION_URL, '');

// get current directions to office location func
export function getDirectionsFromLocation(location) {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const success = (pos) => {
    const crd = pos.coords;
    const lat = crd.latitude;
    const long = crd.longitude;
    const currentOffice = location.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase();

    // filter through available offices
    const destination = OFFICE_LOCATIONS.filter(
      (v) => v.label === currentOffice,
    )[0].address;
    const map = `https://www.google.com/maps/dir/${lat}+${long}/${destination}`;
    window.open(map, '_blank');
  };

  const error = (err) => {
    console.warn(`ERROR(${err.code}):${err.message}`);
  };

  navigator.geolocation.getCurrentPosition(success, error, options);
}

export const cutAnchorUrl = (slug) => {
  const index = slug.indexOf('#');

  if (index !== -1) {
    return slug.substring(0, index);
  }

  return slug;
};

// filter by key
export function filterByKey(list, key) {
  const results = [];
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].key) {
      if (list[i].key === key) {
        results.push(list[i].selected);
      }
    }
  }
  return results;
}

// make title
export const makeTitle = (string) => string.replace(/-|\s/g, ' ').replace(/\+/g, ' ').toUpperCase();

// format GMT date
export function formatDate(date) {
  const dateObj = new Date(date);
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return `${
    month[dateObj.getMonth()]
  } ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
}

// print screen event
export function printScreen() {
  window.print();
  return false;
}

// limit the string length to 200 characters
export function setTextLen(title, len) {
  if (title.length > len) {
    return `${title.substring(0, len)} ...`;
  }

  return title;
}

// create a description from post content
export const extractDescription = (content) => {
  const strip = content.replace(/<[^>]*>?/gm, '').replace(/(\r\n|\n|\r)/gm, '');
  const excerpt = `${strip.split(' ').splice(0, 25).join(' ')} ...`;
  return excerpt;
};

// external blog fetch helper
export const fetchExternalPosts = async (site, authorId, amount) => {
  try {
    const url = `${site}/wp-json/wp/v2/posts?author=${authorId}&per_page=${amount}&orderby=date`;
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return await res.json();
  } catch (error) {
    console.error(error);
  }
};

// Format image src into a cloudinary url
export const formatSrcToCloudinaryUrl = (src) => {
  if (src) {
    const splitSrc = src.split('/');
    const file = splitSrc[splitSrc.length - 1];
    return CLOUDINARY_BASE_URL + file;
  }
  return '/images/no-image-found-diamond-750x350.png';
};

// Format pdf src into a cloudinary url
export const formatSrcToCloudinaryUrlPdf = (src) => {
  if (src) {
    const splitSrc = src.split('/');
    const file = splitSrc[splitSrc.length - 1];
    return CLOUDINARY_BASE_URL + file;
  }
  return null;
};

// Format image src into a cloudinary url
export const formatPageImageToCloudinaryUrl = (page) => {
  const tossUrl = 'https://wp.scarincihollenbeck.com/wp-content/uploads/';
  if (page.includes(tossUrl)) {
    return page
      .replace(
        /https:\/\/wp.scarincihollenbeck.com\/wp-content\/uploads\//g,
        CLOUDINARY_BASE_URL,
      )
      .replace(/-\d{3,}x\d{3,}\./g, '.');
  }

  return page;
};

export const getCloudinaryImageUrl = (dataVersion, dataPublicId) => `${EMAGE_UPLOAD_CLOUDINARY}${dataVersion}/${dataPublicId}`;

export const sanitizeExternalArticles = (arr) => arr.map(({
  id, link, title, date,
}) => ({
  id,
  link: {
    url: link,
    target: '_blank',
  },
  title: title.rendered,
  date,
}));

export const concatNameUser = (name, abbreviation) => {
  if (abbreviation) {
    return `${name}, ${abbreviation}`;
  }

  return name;
};

export const getSubTitleFromHTML = (htmlContent) => {
  const extractSubTitle = htmlContent.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const subTitle = extractSubTitle !== null
    ? extractSubTitle[0].replace(/<[^>]*>?/gm, '')
    : '';
  const bodyContentCutSubTitle = htmlContent.replace(subTitle, '');
  return {
    clearBody: bodyContentCutSubTitle.replace(/<h2(.*?)><\/h2>/gim, ''),
    subTitle,
  };
};

export const correctAttorneyLink = (link) => {
  const regEx = /(attorney)/g;
  return link.replace(regEx, 'attorneys');
};

export const changeTitle = (title, isH1) => {
  const symbolCheckObject = {
    '&#8220;': '"',
    '&#8221;': '"',
    '&amp;': '&',
  };
  Object.keys(symbolCheckObject).map(
    (symbol) => (title = title.replace(symbol, symbolCheckObject[symbol])),
  );

  const pattern = /(\d+)th/g;
  title = title.replace(pattern, (match, number) => `${number}<span>th</span>`);

  if (!isH1 || typeof isH1 === 'undefined') {
    return title;
  }

  title = `<h1>${title}</h1>`;
  return title;
};

export const getSlugFromUrl = (inputString) => {
  const pattern = /\/([^/]+)$/; // Match the last slash and capture non-slash characters after it
  const match = pattern.exec(inputString);

  if (match && match[1]) {
    return match[1];
  }

  return inputString;
};

export const cutSlashFromTheEnd = (url) => (url.endsWith('/') ? url.slice(0, -1) : url);

export const convertUnixTimestampToISO = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000); // Convert Unix timestamp to milliseconds
  return date.toISOString(); // Convert to ISO 8601 string
};

export const sanitizePracticesByChildren = (practices) => practices
  .filter(({ practicePortalPageContent }) => practicePortalPageContent?.practicePortalCategories?.includes(
    'Core Practices',
  ))
  .map(
    ({
      databaseId,
      title,
      uri,
      practicesIncluded,
      practicePortalPageContent,
    }) => {
      if (empty(practicesIncluded.childPractice)) {
        practicesIncluded.childPractice = [];
      }
      return {
        databaseId,
        title,
        uri: empty(uri) ? '' : uri,
        ...practicesIncluded,
        ...practicePortalPageContent,
      };
    },
  );

export const rebuildDataForAttorneysCards = (practices, attorneys) => {
  // Iterate through each practice
  practices.forEach((practice) => {
    // Iterate through each attorney
    attorneys.forEach((attorney) => {
      // Check if the attorney's id matches any of the databaseId values in the includeAttorney array of the practice
      if (
        practice.practicesIncluded
        && practice.practicesIncluded.includeAttorney
      ) {
        const matchingAttorney = practice.practicesIncluded.includeAttorney.find(
          (att) => att.databaseId === attorney.id,
        );
        if (matchingAttorney) {
          // If there's a match, add the practice title to the attorney's practices_array
          if (!attorney.practices_array) {
            attorney.practices_array = [];
          }
          attorney.practices_array.push(practice.title);
        }
      }
    });
  });

  return attorneys;
};

export const deleteReviewsWithoutComment = (reviews) => reviews.filter((review) => !empty(review.text));

export const changePostLink = (url) => {
  const parts = url.replace(`${PRODUCTION_URL}/`, '').split('/');
  const result = `/${parts[0]}/${parts[parts.length - 1]}`;
  return result;
};

export const checkOnPublish = (array) => array.filter((item) => item?.status === 'publish') || [];

export const sortAttorneysByCategory = (attorneys, titles) => {
  if (!attorneys || !titles) return null;
  const results = {};

  titles.forEach((title) => {
    results[title.name] = {
      attorneys: [],
    };
  });

  attorneys.forEach((attorney, idx) => {
    if (
      typeof attorney.designation === 'string'
      && !attorney.designation.includes('Firm Managing Partner')
      && !attorney.designation.includes('Deputy Managing Partner')
      && !attorney.designation.includes('Chief Executive Officer')
      && !attorney.designation.includes('NYC Managing Partner')
      && attorney.designation.includes(' Managing Partner')
    ) {
      results.Partners?.attorneys.push(attorney);
    }
    if (attorney.designation === 'Chief Executive Officer') {
      results['Firm Managing Partner']?.attorneys.push(attorney);
      results['Firm Leaders']?.attorneys.unshift(attorney);
      results['Firm management']?.attorneys.unshift(attorney);
    }
    if (typeof attorney.designation !== 'string') {
      results['Practice Leaders']?.attorneys.push(attorney);
    }
    if (attorney.designation === 'Deputy Managing Partner') {
      results['Firm Managing Partner']?.attorneys.push(attorney);
      results['Firm management']?.attorneys.push(attorney);
    }
    if (attorney.designation === 'NYC Managing Partner') {
      results['Firm Managing Partner']?.attorneys.push(attorney);
      results['Firm management']?.attorneys.push(attorney);
    }
    if (attorney.designation === 'Chief Growth Officer') {
      results['Administrative Management']?.attorneys.push(attorney);
      results.Directors?.attorneys.push(attorney);
    }
    if (
      typeof attorney.designation === 'string'
      && attorney?.designation?.includes('Director ')
    ) {
      results['Administrative Management']?.attorneys.push(attorney);
    }
    Object.keys(results).forEach((key) => {
      if (
        attorney.designation[0] === key[0]
        && attorney.designation[0]
        && !attorney.designation.includes('Deputy Managing Partner')
        && !attorney.designation.includes('NYC Managing Partner')
        && !attorney.designation.includes('Chief Executive Officer')
      ) {
        results[key].attorneys.push(attorney);
      }
    });
  });

  const recreatedPositions = results['Firm Managing Partner']?.attorneys.reverse();

  const designationIndex = recreatedPositions?.findIndex(
    (attorney) => attorney.designation === 'NYC Managing Partner',
  );

  if (!empty(recreatedPositions) && designationIndex !== -1) {
    const removedDesignation = recreatedPositions.splice(
      designationIndex,
      1,
    )[0];
    recreatedPositions.push(removedDesignation);
  }

  return results;
};

export const setResponseHeaders = (res, revalidateTime, cacheStatus) => {
  res.setHeader(
    'Cache-Control',
    `public, max-age=${revalidateTime}, s-maxage=${revalidateTime}, stale-while-revalidate=${revalidateTime}`,
  );
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('X-Cache-Status', cacheStatus);
};

export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

export const createMenuData = (practices, locations, industries) => [
  {
    databaseId: 'menu-01',
    title: 'Homepage',
    icon: <HomeIcon />,
    href: '/',
  },
  {
    databaseId: 'menu-02',
    title: 'Attorneys',
    icon: <AttorneysIcon />,
    href: '/attorneys',
  },
  {
    databaseId: 'menu-03',
    title: 'Legal Practices',
    icon: <PracticesIcon />,
    href: '/services',
    list: [
      {
        databaseId: 'menu-all-practices',
        uri: '/services',
        title: 'View all services',
        additionalClass: 'main-link',
      },
      ...practices,
    ],
  },
  {
    databaseId: 'menu-04',
    title: 'Industries',
    icon: <IndustriesIcon />,
    href: '/services',
    list: [
      {
        databaseId: 'menu-all-industries',
        uri: '/services',
        title: 'View all services',
        additionalClass: 'main-link',
      },
      ...industries,
    ],
  },
  {
    databaseId: 'menu-05',
    title: 'Locations',
    icon: <LocationsIcon />,
    href: '/location/new-york',
    list: !empty(locations) ? [...locations] : [],
  },
  {
    databaseId: 'menu-06',
    title: 'Library',
    icon: <LibraryIcon />,
    href: '/',
    list: [
      {
        databaseId: 'menu-lib-01',
        title: 'Client Alerts',
        uri: '/library/category/client-alert',
      },
      {
        databaseId: 'menu-lib-02',
        title: 'Firm News',
        uri: '/library/category/firm-news',
      },
      {
        databaseId: 'menu-lib-03',
        title: 'Firm Events',
        uri: '/library/category/firm-events',
      },
      {
        databaseId: 'menu-lib-04',
        title: 'Firm Insights',
        uri: '/library/category/law-firm-insights',
      },
    ],
  },
  {
    databaseId: 'menu-07',
    title: 'The Firm',
    icon: <FirmIcon />,
    href: '/',
    list: [
      {
        databaseId: 'menu-firm-01',
        title: 'Administration',
        uri: '/administration',
      },
      {
        databaseId: 'menu-firm-02',
        title: 'Careers',
        uri: '/careers',
      },
      {
        databaseId: 'menu-firm-03',
        title: 'Community Involvement',
        uri: '/community-involvement',
      },
      {
        databaseId: 'menu-firm-04',
        title: 'Diversity',
        uri: '/diversity',
      },
      {
        databaseId: 'menu-firm-05',
        title: 'Firm Overview',
        uri: '/firm-overview',
      },
      {
        databaseId: 'menu-firm-06',
        title: 'Pro Bono',
        uri: '/pro-bono',
      },
      // this page went to the Draft status.
      // {
      //   databaseId: 'menu-firm-07',
      //   title: 'Women Lead',
      //   uri: '/women-lead',
      // },
    ],
  },
  {
    databaseId: 'menu-08',
    title: 'Careers',
    icon: <CareersIcon />,
    href: '/careers',
  },
];

export const createOverviewLinks = (practices, isAllLinks) => {
  if (empty(practices)) return null;

  return practices.map((practice) => {
    if (empty(practice?.childPractice) && !isAllLinks) return practice;

    const overviewChild = {
      databaseId: `${practice.databaseId}_${practice.title}`,
      title: `${practice.title} overview`,
      uri: practice.uri,
    };

    const updatedChildPractice = [overviewChild, ...practice.childPractice];

    return {
      ...practice,
      childPractice: updatedChildPractice,
    };
  });
};

export const getIcon = (name) => {
  const icons = {
    Attorneys: <AttorneysIcon />,
    Banking: <BankingIcon />,
    Cannabis: <CannabisIcon />,
    Careers: <CareersIcon />,
    Firm: <FirmIcon />,
    Food: <FoodIcon />,
    Home: <HomeIcon />,
    Industries: <IndustriesIcon />,
    'News paper': <LibraryIcon />,
    Locations: <LocationsIcon />,
    MailingList: <MailingListIcon />,
    Media: <MediaIcon />,
    Payment: <PaymentIcon />,
    Posts: <PostsIcon />,
    Practices: <PracticesIcon />,
    'Real Estate': <RealEstateIcon />,
    Transportation: <TransportationIcon />,
    Brain: <BrainIcon />,
    Briefcase: <BriefcaseIcon />,
    Documents: <DocumentsIcon />,
    Environmental: <EnvironmentalIcon />,
    Tax: <TaxIcon />,
    Check: <CheckIcon />,
    Map: <MapIcon />,
    Scope: <ScopeIcon />,
    Globe: <GlobeIcon />,
    Bulb: <BulbIcon />,
    Government: <GovernmentIcon />,
    Gaming: <GamingIcon />,
  };

  return icons[name];
};

export const filterAttorneysByDesignation = (attorneys) => {
  if (empty(attorneys)) return [];
  return attorneys.filter((attorney) => attorney.designation.includes('Partner'));
};

export const chunkArray = (array, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};
