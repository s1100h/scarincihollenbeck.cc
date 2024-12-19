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
  readyIndustriesUrls,
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
  if (!title) return '';
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
      // In a pause. That code is adding mr.Warren to Firm Managing Partner section.
      // && !attorney.designation.includes('NYC Managing Partner')
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
    // In a pause. That code is adding mr.Warren to Firm Managing Partner section.
    // if (attorney.designation === 'NYC Managing Partner') {
    //   results['Firm Managing Partner']?.attorneys.push(attorney);
    //   results.Partners?.attorneys.push(attorney);
    // }
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
    `public, s-maxage=${revalidateTime}, stale-while-revalidate`,
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
        title: 'View all practices',
        additionalClass: 'bolder',
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
        uri: '/services#industries',
        title: 'View all industries',
        additionalClass: 'bolder',
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
      {
        databaseId: 'menu-firm-07',
        title: 'In Memoriam',
        uri: '/memorials',
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

export const attorneysSanitize = (attorneysArr) => {
  const designationOrder = [
    'Firm Managing Partner',
    'Deputy Managing Partner',
    'Partner',
    'Counsel',
    'Of Counsel',
    'Senior Associate',
    'Associate',
  ];

  return attorneysArr
    .map((attorney) => {
      attorney.attorneyMainInformation.profileImage = !empty(
        attorney.attorneyMainInformation?.profileImage?.sourceUrl,
      )
        ? attorney.attorneyMainInformation.profileImage.sourceUrl
        : '/images/no-image-found-diamond-750x350.png';
      return {
        databaseId: attorney.databaseId,
        link: attorney.uri,
        title: attorney.title,
        status: attorney.status,
        ...attorney.attorneyMainInformation,
        ...attorney.attorneyPrimaryRelatedPracticesLocationsGroups,
      };
    })
    .sort((a, b) => {
      const indexA = designationOrder.indexOf(a.designation);
      const indexB = designationOrder.indexOf(b.designation);

      if (indexA !== indexB) {
        return indexA - indexB; // Sort by designation order first
      }
      return a.lastName?.localeCompare(b.lastName); // If designations are the same, sort by last name
    });
};

export const getIndustryLink = (uri, defaultUri = '/services#industries') => (readyIndustriesUrls.includes(uri) ? uri : defaultUri);

export const filterTunePractices = (practice) => {
  const titleMap = {
    'Employment Defense Attorney': true,
    'Government Strategies': true,
  };

  return !titleMap[practice.title];
};

// eslint-disable-next-line
export const isMobileCheck = () => {
  if (typeof window === 'undefined') return null;
  let check = false;
  (function detectMobile(a) {
    if (
      // eslint-disable-next-line no-useless-escape
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a,
      )
      // eslint-disable-next-line no-useless-escape
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4),
      )
    ) check = true;
  }(navigator.userAgent || navigator.vendor || window.opera));
  return check;
};

// Formate awards
export const formateAwards = (awards) => {
  if (empty(awards)) return [];

  return awards
    ?.map(
      (
        {
          appearanceOrder,
          imageHeight,
          imageWidth,
          label,
          awardImage,
          year,
          awardTitle,
          awardLink,
        },
        index,
      ) => ({
        id: label || awardTitle,
        order: appearanceOrder || index,
        year,
        label: label || awardTitle,
        image: {
          src: formatSrcToCloudinaryUrl(awardImage.sourceUrl),
          alt: label || awardTitle,
          width: imageWidth || 200,
          height: imageHeight || 200,
        },
        link: awardLink || null,
      }),
    )
    .sort((a, b) => (a.order > b.order ? 1 : -1));
};
