import { useRouter } from 'next/router';
import EntertainmentAndMediaPage from '../../../components/practices-special/entertainment-and-media/EntertainmentAndMediaPage';
import { PRODUCTION_URL } from '../../../utils/constants';
import SiteLoader from '../../../components/shared/SiteLoader';
import {
  getPracticeAttorneys,
  headMetaData,
} from '../../../requests/practices/practice-default';
import { getSlugFromUrl } from '../../../utils/helpers';
import ApolloWrapper from '../../../layouts/ApolloWrapper';

/** Set single practice data to page props */
export const getServerSideProps = async ({ res, resolvedUrl }) => {
  res.setHeader(
    'Cache-Control',
    'max-age=0, s-maxage=60, stale-while-revalidate',
  );
  const slug = getSlugFromUrl(resolvedUrl);

  const {
    practice,
    includeAttorney,
    practiceChief,
    keyContactsList,
    corePractices,
  } = await getPracticeAttorneys(resolvedUrl);

  practice.practiceContentByCategory.entAndMedia = {
    cardsInfo: {
      cards: [
        {
          title: 'Deep Commitment',
          paragraph:
            'Our attorneys have been involved in the cannabis space since its infancy and are deeply invested in the success of our clients and the overall cannabis industry. As the industry grows and becomes more competitive, the importance of sound legal guidance and practical business advice in the cannabis space will grow increasingly important.',
        },
        {
          title: 'Trailblazing Spirit',
          paragraph:
            'Our attorneys understand that cannabis businesses face obstacles that are unique to the industry. We are constantly advocating for legal and regulatory solutions that help even the playing field. We are also committed to helping the cannabis industry expand while also providing guidance regarding the emerging hemp, CBD, and psychedelics industries.',
        },
        {
          title: 'Industry Insight',
          paragraph:
            'As industry insiders we have developed strong relationships with other key players, including regulators, trade organizations, investors, and vendors. Our cannabis attorneys stay continually informed on any changes to local, state, and federal cannabis laws and stand ready to help our clients quickly take advantage of new opportunities as they arise.',
        },
      ],
    },
    photoBlock: {
      articleBox: {
        paragraph:
          'The ever-evolving legal landscape can pose significant challenges for businesses operating in the cannabis, hemp, and cannabidiol (CBD) industries. Our cannabis law attorneys have the knowledge and experience needed to successfully navigate this complex and often self-contradictory regulatory landscape.',
        title: 'Helping Cannabis Businesses Navigate Complex Laws',
      },
      photo1: {
        altText: '',
        caption: null,
        sourceUrl:
          'https://res.cloudinary.com/scarinci-hollenbeck/images/f_auto,q_auto/v1697024131/wp.scarincihollenbeck/top-200-cannabis-lawyers_164966b9dca/top-200-cannabis-lawyers_164966b9dca.webp?_i=AA',
      },
      photo2: {
        altText: '',
        sourceUrl:
          'https://res.cloudinary.com/scarinci-hollenbeck/images/f_auto,q_auto/v1697024177/wp.scarincihollenbeck/very-best-lawyers-for-cannabis-page/very-best-lawyers-for-cannabis-page.webp?_i=AA',
        caption: null,
      },
    },
    descriptionSubheader:
      'While the number of states legalizing cannabis for medical and adult use continues to grow, businesses operating in the cannabis industry still face legal uncertainty due to the ongoing dichotomy between state and federal cannabis law. ',
    subTitle:
      'Scarinci Hollenbeck was one of the first in the region to establish a dedicated Cannabis Group and remains at the forefront of the industry.',
    attorneysArticleBlock: {
      paragraph:
        'The rapidly developing legal cannabis industry is creating enormous opportunity for interested parties and will continually require participants to address novel and complex legal issues. Our Cannabis Law practice group provides the critical legal insight needed to successfully address these issues, mitigate related risk, and achieve business goals.',
      title: 'What Our Cannabis Attorneys Do',
    },
    keycontactsblock: {
      article:
        'WE advise cannabis industry clients on a myriad of issues, whether its obtaining a recreational cannabis license, negotiating a lease for a retail dispensary, or implementing banking and tax strategies. Our attorneys routinely provide legal guidance regarding:',
      listOfLegalGuidanceRegarding: [
        {
          issue: 'Advertising, Marketing, and Branding',
        },
        {
          issue: 'Business Operations',
        },
        {
          issue: 'Data Privacy and Security',
        },
        {
          issue: 'Entity Formation',
        },
        {
          issue: 'Environmental Considerations',
        },
        {
          issue: 'Federal, State and Local Tax Issues',
        },
        {
          issue: 'Financing and Joint Ventures',
        },
        {
          issue: 'Intellectual Property',
        },
        {
          issue:
            'Labor & Employment (employment contracts, employee handbooks, drug testing, and workplace policies)',
        },
        {
          issue: 'Licensing (medical and recreational)',
        },
        {
          issue: 'Local Zoning and Permitting Requirements',
        },
        {
          issue: 'Municipal Approvals',
        },
        {
          issue: 'Real Estate Transactions',
        },
        {
          issue: 'Regulatory Compliance',
        },
      ],
      underlay: {
        altText: 'smoker',
        sourceUrl:
          'https://res.cloudinary.com/scarinci-hollenbeck/images/f_auto,q_auto/v1693813529/wp.scarincihollenbeck/smoker/smoker.png?_i=AA',
      },
    },
    helpArticleBlock: {
      title: 'Who Our Cannabis Attorneys Help',
      paragraphs: [
        {
          paragraph:
            'We advise entrepreneurs and businesses involved at every level of the cannabis supply chain, including cannabis cultivation, processing, distribution, and retail sale, as well as those that provide ancillary services to the industry. Since many cannabis businesses are also start-ups, we collaborate with the firm’s other practice groups to provide guidance on contracts, employment, intellectual property, insurance, financing, tax, and real estate matters.',
        },
        {
          paragraph:
            'Our practice is not limited to cannabis businesses. We also advise employers, municipalities, real property owners, banks, insurance companies, private equity firms, investors, and service providers about how local, state, and federal cannabis law may impact their operations.',
        },
      ],
    },
    newspaperBlock: {
      article: {
        paragraph:
          'Scarinci Hollenbeck is proud of the success of our cannabis industry clients. Our client Roll Up Life, Inc. was named a 2022 Minority Business of the Year at the annual NJ Cannabis Insider awards ceremony. We advise the New Jersey-based cannabis company, which plans to apply for a license to operate as an adult-use cannabis delivery service, in a variety of areas including corporate, real estate, and strategic planning.',
        title: 'Our Cannabis Attorneys in Action',
      },
      newspaperBox: {
        newspaperArticle:
          'We are also proud to be active members of the cannabis industry. Our Cannabis Group members speak extensively on panels covering a variety of developments in cannabis law and serve on panels, roundtables, and committees addressing legal issues impacting the cannabis space. Partner and Cannabis Group Chair Daniel McKillop was named a 2018 Trailblazer in Cannabis Law by the National Law Journal. Mr. McKillop has served as an Executive member of the NJSBA Cannabis Law Committee since 2021, and in 2022he established and now co-chairs the NJSBA’s Psychedelic Law Subcommittee.',
        newspaperPhotoBox: {
          altText: 'Trailblazers',
          sourceUrl:
            'https://res.cloudinary.com/scarinci-hollenbeck/images/f_auto,q_auto/v1693829021/wp.scarincihollenbeck/trailblazers/trailblazers.png?_i=AA',
          caption: null,
        },
      },
    },
    subheaderBackgroundImg: {
      link: '/images/entAndMediaIntro.png',
    },
  };

  if (typeof practice === 'undefined') {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      practice,
      entAndMediaData: practice.practiceContentByCategory.entAndMedia,
      chairPractice: practiceChief || [],
      attorneyListPractice: includeAttorney || [],
      keyContactsList,
      attorneysSchemaData: headMetaData(practiceChief, includeAttorney),
      corePractices,
      practiceChildren: practice?.practicesIncluded?.childPractice,
      slug,
    },
  };
};

const EnterteimentAndMedia = ({
  practice,
  corePractices,
  practiceChildren,
  slug,
  attorneysSchemaData,
  chairPractice,
  attorneyListPractice,
  keyContactsList,
  entAndMediaData,
}) => {
  const router = useRouter();
  const practiceUrl = router.asPath
    .replace('/practices/', '')
    .replace('/practice/', '');
  const canonicalUrl = `${PRODUCTION_URL}/practices/${practice.slug}`;

  if (router.isFallback) {
    return <SiteLoader />;
  }

  const siteTabs = practice.practicesIncluded.contentSection.map(
    (tab, index) => ({
      ...tab,
      id: index,
    }),
  );

  const fullTabs = [
    ...siteTabs,
    {
      id: 99,
      title: 'Related Articles',
      content: '<h4>Related Articles</h4>',
    },
  ];

  const propsPage = {
    corePractices,
    practice,
    practiceChildren,
    attorneysSchemaData,
    practiceUrl,
    canonicalUrl,
    tabs: fullTabs,
    slug,
    chairPractice,
    attorneyListPractice,
    keyContactsList,
    entAndMediaData,
  };
  return (
    <ApolloWrapper>
      <EntertainmentAndMediaPage {...propsPage} />
    </ApolloWrapper>
  );
};

export default EnterteimentAndMedia;
