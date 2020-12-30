export function parseBlogBodyContent(content) {
  const doc = new DOMParser().parseFromString(content, 'text/html');
  const h2Tag = doc.querySelector('h2');
  const img = doc.querySelector('img');
  const figCaption = doc.querySelector('figcaption');

  if (doc.body.querySelector('h2')) {
    doc.body.querySelector('h2').remove();
  }

  if (doc.body.querySelector('img')) {
    doc.body.querySelector('img').remove();
  }

  if (doc.body.querySelector('figcaption')) {
    doc.body.querySelector('figcaption').remove();
  }

  return {
    h2TagText: (h2Tag) ? h2Tag.innerText : '',
    imgSrc: (img) ? img.src : '/images/no-image-found-diamond-750x350.png',
    captionText: (figCaption) ? figCaption.innerText : '',
    postContent: doc.body.innerHTML || '',
  };
}
