/* eslint-disable consistent-return */
/* eslint-disable no-else-return */

// fetch image and convert to blob
export const fetchAsBlob = url => fetch(url).then(response => response.blob());

// convert blog to base 64 string
export const convertBlobToBase64 = blob => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onerror = reject;

  reader.onload = () => {
    resolve(reader.result);
  };

  reader.readAsDataURL(blob);
});

// scrape page for specific elements
export const scrapePage = (document, tag) => {
  if (tag === '#author a') {
    const author = document.querySelector(tag).innerText;
    return author;
  } else if (tag === '#date') {
    const date = document.querySelector(tag).innerText;
    return date;
  } else if (tag === '.wp-block-image img') {
    const img = document.querySelector(tag).src;
    return img;
  } else if (tag === '.wp-block-image figcaption') {
    const att = document.querySelector(tag).innerText;
    return att;
  }
};

// fetch attorney from database
const fetchAttorneyData = url => fetch(url).then(response => response.json());

// retrieve attorney card data
export const getAttorney = (attorney = null) => {
  const url = `http://192.168.99.100:8082/wp-json/attorney-card/attorney/${attorney}`;
  return fetchAttorneyData(url);
};

// format html to text
export const convertUniCodeToString = html => html
  .replace(/[\u2018\u2019]/g, "'")
  .replace(/[\u201C\u201D]/g, '"')
  .replace(/\u2013|\u2014/g, '-')
  .replace(/&#65219;/g, '')
  .replace(/&#65279/g, '')
  .replace(/&nbsp;/g, '')
  .replace(/,/g, ',')
  .replace(/&amp;/g, '&');

// remove main image, links, header title from content
export const removeTitlesAndImgs = html => html
  .replace(/<img[^>]*>/g, '')
  .replace(/<h2.*style=.text-align: center.*.<\/h2>/g, '')
  .replace(/<h2.*style=.text-align:center.*.<\/h2>/g, '')
  .replace(/<figcaption.*.\/figcaption>/g, '')
  .replace(/<a\b[^>]*>/g, '')
  .replace(/<\/a>/g, '');
