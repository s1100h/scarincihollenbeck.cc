import {
  BsFileEarmarkRichtextFill,
  BsFillBriefcaseFill,
  BsPeopleFill,
  BsPersonPlusFill,
} from 'react-icons/bs';

export const tileContentArr = [
  {
    title: 'For media inquiries',
    textContent: `
    Please visit <a href='/library/category/law-firm-insights'>Firm Insights.</a>
    `,
    icon: <BsFileEarmarkRichtextFill />,
    id: 1,
  },
  {
    title: 'For job opportunities',
    textContent: `
    Please visit our <a href='/careers'>Careers page.</a>
    `,
    icon: <BsFillBriefcaseFill />,
    id: 2,
  },
  {
    title: 'phone',
    textContent: '',
    icon: '',
    image: '/images/hands.webp',
    id: 3,
  },
  {
    title: 'For clients',
    textContent: `
    If you are a client, please get in touch with your 
    <a href='/attorneys'>Scarinci Hollenbeck attorneys</a> contact directly.
    `,
    icon: <BsPeopleFill />,
    id: 4,
  },
  {
    title: 'Get in touch',
    textContent: `
   If you are looking to get in touch with an attorney in regard to becoming a new client, please   
    call <a href='tel:201-896-4100'>201-896-4100.</a>
   `,
    icon: <BsPersonPlusFill />,
    id: 5,
  },
];
