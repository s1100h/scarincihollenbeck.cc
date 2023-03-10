import { CLOUDINARY_BASE_URL, OFFICE_LOCATIONS, PRODUCTION_URL } from './constants';

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
    const destination = OFFICE_LOCATIONS.filter((v) => v.label === currentOffice)[0].address;
    const map = `https://www.google.com/maps/dir/${lat}+${long}/${destination}`;
    window.open(map, '_blank');
  };

  const error = (err) => {
    console.warn(`ERROR(${err.code}):${err.message}`);
  };

  navigator.geolocation.getCurrentPosition(success, error, options);
}

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
  return `${month[dateObj.getMonth()]} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
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
    const modImageUrlContent = page
      .replace(/https:\/\/wp.scarincihollenbeck.com\/wp-content\/uploads\//g, CLOUDINARY_BASE_URL)
      .replace(/-\d{3,}x\d{3,}\./g, '.');
    return modImageUrlContent;
  }

  return page;
};

export const sanitizeExternalArticles = (arr) => arr.map(({
  id, link, title, date,
}) => ({
  id,
  link,
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
  const subTitle = extractSubTitle !== null ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
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

export const changeTitle = (title) => {
  const symbolCheckObject = {
    '&#8220;': '"',
    '&#8221;': '"',
    '&amp;': '&',
  };
  Object.keys(symbolCheckObject).map(
    (symbol) => (title = title.replace(symbol, symbolCheckObject[symbol])),
  );
  return title;
};
