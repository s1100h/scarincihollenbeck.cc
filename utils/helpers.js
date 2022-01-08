import { CLOUDINARY_BASE_URL } from './constants';
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

// get current directions to office location func
export function getDirectionsFromLocation(location) {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const offices = [
    {
      title: 'lyndhurst',
      address: '1100 Valley Brook Ave. Lyndhurst, NJ 07071',
    },
    {
      title: 'red bank',
      address: '331 Newman Springs Road Red Bank, NJ 07701',
    },
    {
      title: 'new york',
      address: '589 8th Avenue, New York, NY, 10018',
    },
    {
      title: 'washington dc',
      address: 'Suite 250 1000 Potomac St., N.W. Washington D.C. 20007',
    },
  ];

  const success = (pos) => {
    const crd = pos.coords;
    const lat = crd.latitude;
    const long = crd.longitude;
    const currentOffice = location.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase();

    // filter through available offices
    const destination = offices.filter((v) => v.title === currentOffice)[0].address;
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

// capitalize all first letters in a word
export const capitalizeFirstLetterInWords = (string) => {
  if (string && string !== undefined) {
    const words = string.split(' ');

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(' ');
  }
  return string;
};

// common headers for fetch
export const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

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
  const results = `${month[dateObj.getMonth()]} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;

  return results;
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
  const url = `${site}/wp-json/wp/v2/posts?author=${authorId}&per_page=${amount}&orderby=date`;
  const request = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => data.json())
    .catch((err) => err);

  return request;
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
    const modImageUrlContent = page
      .replaceAll(tossUrl, CLOUDINARY_BASE_URL)
      .replace(/-\d{3}x\d{3}/g, '');
    return modImageUrlContent;
  }

  return page;
};

// sanitize internal articles from graphql request
export const sanitizeArticles = (arr) => arr.map(({ node }, index) => ({
  id: index,
  link: node.uri,
  image: formatSrcToCloudinaryUrl(node.featuredImage?.node.sourceUrl),
  date: node.date,
  excerpt: node.excerpt,
  title: node.title,
}));

export const sanitizeExternalArticles = (arr) => arr.map(({
  id, link, title, date,
}) => ({
  id,
  link,
  title: title.rendered,
  date,
}));
