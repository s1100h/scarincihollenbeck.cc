/* eslint-disable no-else-return */
/* eslint-disable import/prefer-default-export */
export const createMarkup = content => ({ __html: content });

export const getDirectionsFromLocation = (location) => {
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
      address: '3 Park Ave. New York, NY 10016',
    },
    {
      title: 'washington dc',
      address: 'Suite 250 1000 Potomac St., N.W. Washington D.C. 20007',
    },
    {
      title: 'san francisco',
      address: '315 Montgomery St. San Francisco, CA 94104',
    },
  ];

  const success = (pos) => {
    const crd = pos.coords;
    const lat = crd.latitude;
    const long = crd.longitude;
    const currentOffice = location.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase();

    // filter through available offices
    const destination = offices.filter(v => v.title === currentOffice)[0].address;
    const map = `https://www.google.com/maps/dir/${lat}+${long}/${destination}`;
    window.open(map, '_blank');
  };

  const error = (err) => {
    console.warn(`ERROR(${err.code}):${err.message}`);
  };

  navigator.geolocation.getCurrentPosition(success, error, options);
};

// find url parameter for query
export const splitUrl = (url, term = null) => {
  const x = url.split('/');
  let y = x.filter(a => a !== '');

  if (term !== null) {
    y = y.filter(a => a !== '' && a !== term);
  }

  return y;
};

// find url parameter for query in preview
export const splitUrlPreview = (url, splitChar) => {
  let postId = url.substring(url.indexOf(splitChar) + 1);
  postId = postId.substring(0, postId.indexOf('&'));
  return postId;
};

// sort a list by its key
export const sortByKey = (list, key) => {
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
};

export const sortByDateKey = (list, key) => {
  if (list !== undefined) {
    list.sort((a, b) => {
      if (a[key] < b[key]) {
        return 1;
      }
      if (a[key] > b[key]) {
        return -1;
      }
      return 0;
    });
  }

  return list;
};


// add a random key to the end of a string
export const addRandomKey = (str) => {
  const results = str.concat('-').concat(Math.floor((Math.random() * 10000) + 1));
  return results;
};


// take a term lower case and replace white spaces with dashes
export const urlify = str => str.toLowerCase().replace(/\s/g, '-');


// urlify locations
export const locationUrl = location => location.toLowerCase().replace(/\s/g, '-').replace(/[.]/gm, '');

// make title
export const makeTitle = (string) => {
  if (string.indexOf('-') > -1) {
    return string.replace(/-|\s/g, ' ').toUpperCase();
  } else if (string.indexOf('+') > -1) {
    return string.replace(/\+/g, ' ').toUpperCase();
  } else {
    return string.toUpperCase();
  }
};

// unlink
export const unLink = string => string.replace(/-|\s/g, ' ').replace(/\+/g, ' ');


// filter by key
export const filterByKey = (list, key) => {
  const results = [];
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].key) {
      if (list[i].key === key) {
        results.push(list[i].selected);
      }
    }
  }
  return results;
};

// handle complex search sidebar form
export const sumbitSearchForm = (terms) => {
  const {
    s,
    practice,
    attorney,
    category,
  } = terms;

  const formatUrl = str => str.toLowerCase().replace(/\s/g, '+');
  const results = `${(s) || ''} ${(practice && practice !== 'Filter by practice') ? practice : ''} ${(attorney && attorney !== 'Filter by attorney') ? attorney : ''} ${(category && category !== 'Filter by category') ? category : ''}`;
  const url = results.trim().replace(/[^\w\s]/gi, '');
  
  return `${process.env.API_URL}/?s=${formatUrl(url)}`;
};
