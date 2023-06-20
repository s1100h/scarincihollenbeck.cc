import {
  BsFileEarmarkRichtextFill, BsFillBriefcaseFill, BsPeopleFill, BsPersonPlusFill,
} from 'react-icons/bs';

export const tileContentArr = [
  {
    title: 'For media inquiries',
    textContent: `
    Please contact <a href='/administration/peter-s-moeller'>Peter S. Moeller</a>, <strong>Chief Growth Officer</strong>.
    `,
    icon: <BsFileEarmarkRichtextFill />,
    id: 1,
  },
  {
    title: 'For job opportunities',
    textContent: `
    Please visit our <a href='/careers'>Careers page</a>.
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

export const tile404ContentArr = [
  {
    title: 'Attorneys',
    textContent: `
    If you are a client, please get in touch with your 
    <a href='/attorneys'>Scarinci Hollenbeck attorneys</a> contact directly.
    `,
    icon: <BsPeopleFill />,
    id: 0,
  },
  {
    title: 'Practices',
    textContent: `
      <strong>Scarinci Hollenbeck</strong> attorneys routinely represent corporate,
      governmental, and individual clients in a wide range of <a href='/practices'>practices</a>.
   `,
    icon: <BsFillBriefcaseFill />,
    id: 1,
  },
];
