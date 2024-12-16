import { BsFillBriefcaseFill, BsPeopleFill } from 'react-icons/bs';
import { GiBookCover } from 'react-icons/gi';

export const tileContentArr = [
  {
    title: 'For media inquiries',
    textContent:
      "Please contact <a href='/administration/peter-s-moeller'>Peter S. Moeller</a>, Chief Growth Officer.",
    id: 'contact-tile-01',
  },
  {
    title: 'For job opportunities',
    textContent: "Please visit our <a href='/careers'>Careers page</a>.",
    id: 'contact-tile-02',
  },
  {
    title: 'For clients',
    textContent:
      "If you are a client, please get in touch with your <a href='/attorneys'>Scarinci Hollenbeck, LLC attorneys</a> contact directly.",
    id: 'contact-tile-03',
  },
  {
    title: 'Get in touch',
    textContent:
      "If you are looking to get in touch with an attorney in regard to becoming a new client, please call <a href='tel:201-896-4100'>201-896-4100.</a>",
    id: 'contact-tile-04',
  },
];

export const tile404ContentArr = [
  {
    title: 'Attorneys',
    textContent: `
    If you are a client, please get in touch with your 
    <a href='/attorneys'>Scarinci Hollenbeck, LLC attorneys</a> contact directly.
    `,
    icon: <BsPeopleFill />,
    id: 0,
  },
  {
    title: 'Practices',
    textContent: `
      <strong>Scarinci Hollenbeck, LLC</strong> attorneys routinely represent corporate,
      governmental, and individual clients in a wide range of <a href='/services'>practices</a>.
    `,
    icon: <BsFillBriefcaseFill />,
    id: 1,
  },
];

export const tilesErrorContentArr = [
  {
    title: '',
    textContent: "<a href='/library/category/firm-news'>The posts Library</a>",
    icon: <GiBookCover />,
    id: 0,
  },
];
