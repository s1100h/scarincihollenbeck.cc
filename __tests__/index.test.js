import '@testing-library/jest-dom';
import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import mockRouter from 'next-router-mock';
import AboutFirm from 'components/organisms/home/AboutFirm';
import preloadAll from 'jest-next-dynamic';
import PracticeCard from 'components/organisms/home/PracticeCard';
import PracticesTabs from 'components/organisms/home/PracticesTabs';
import renderer from 'react-test-renderer';
import Awards from 'components/organisms/home/Awards';
import LatestPostsSection from 'components/organisms/home/LatestPostsSection';
import AllOfficeLocations from 'components/organisms/home/AllOfficeLocations';
import HomePage from '../components/pages/HomePage';
import { wpGraphQl } from '../redux/services/wp-graphql';
import { appApi } from '../redux/services/project-api';
import attorneysReducer from '../redux/slices/attorneys.slice';
import formsReducer from '../redux/slices/forms.slice';
import sizesReducer from '../redux/slices/sizes.slice';

beforeAll(async () => {
  await preloadAll();
});

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

// Set up the store
const store = configureStore({
  reducer: {
    [wpGraphQl.reducerPath]: wpGraphQl.reducer,
    [appApi.reducerPath]: appApi.reducer,
    attorneys: attorneysReducer,
    forms: formsReducer,
    sizes: sizesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(appApi.middleware),
});

const ReduxProvider = ({ children }) => (
  <Provider store={store}>
    <RouterContext.Provider value={mockRouter}>
      {children}
    </RouterContext.Provider>
  </Provider>
);

const renderHomePage = (props) => render(
  <ReduxProvider>
    <HomePage {...props} />
  </ReduxProvider>,
);

jest.mock('@next/third-parties/google', () => ({
  GoogleMapsEmbed: () => <div>Mocked Google Maps Embed</div>,
}));

// Tests
describe('HomePage', () => {
  const mockSetIsShowContactModal = jest.fn();

  it('The Home banner renders', () => {
    renderHomePage();

    const homeBanner = screen.getByTestId('home-banner');
    expect(homeBanner).toBeInTheDocument();
  });

  it('The banner info cards render', () => {
    renderHomePage();
    const bannerCards = screen.getByTestId('banner-cards');
    expect(bannerCards).toBeInTheDocument();
  });

  it('"Who we are" section renders', () => {
    render(
      <AboutFirm
        title="About us"
        heroProfileLink={{ title: 'link', url: '/' }}
        aboutHero="Super hero - super skill"
        arcticle="Frog"
        heroPhoto={{
          sourceUrl: '/images/no-image-found-diamond.png',
          altText: 'logo diamond',
        }}
      />,
    );
    const whoWeAreSection = screen.getByTestId('who-we-are');
    expect(whoWeAreSection).toBeInTheDocument();
  });

  it('Render Home Page Form and submit button in Home Page', () => {
    renderHomePage();

    const formWrapper = screen.getByTestId('ContactFormWrapper');
    expect(formWrapper).toBeInTheDocument();

    const form = formWrapper.querySelector('.kwes-form');
    expect(form).toBeInTheDocument();

    const submitButton = within(form).getByRole('button');
    expect(submitButton).toHaveAttribute('type', 'submit');

    expect(submitButton).toBeInTheDocument();

    if (submitButton.hasAttribute('disabled')) {
      expect(submitButton).toBeDisabled();
    } else {
      expect(submitButton).toBeEnabled();
    }
  });

  it('IndustriesSection render without props in Home Page', () => {
    renderHomePage();

    const industriesSection = screen.getByTestId('industries-wrapper');
    expect(industriesSection).toBeInTheDocument();
  });

  it('IndustriesSection render with props in Home Page', () => {
    renderHomePage({
      industryWeWorkWith: {
        title: 'title',
        subtitle: 'subtitle',
        link: { title: 'title', url: 'url' },
        industryCards: [
          {
            title: 'title',
            icon: 'Cannabis',
            text: 'text',
            link: { url: '/url' },
          },
        ],
      },
    });

    const industriesSection = screen.getByTestId('industries-wrapper');
    expect(industriesSection).toBeInTheDocument();
  });

  it('Random bio section render with buttons in Home Page', () => {
    renderHomePage();

    const randomBioSection = screen.getByTestId('bio-autoplay');
    expect(randomBioSection).toBeInTheDocument();

    const prevButton = within(randomBioSection).getByRole('button', {
      name: /prev/i,
    });
    const nextButton = within(randomBioSection).getByRole('button', {
      name: /next/i,
    });

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it('What we do section render without props in Home Page', () => {
    renderHomePage();

    const whatWeDoSection = screen.getByTestId('what-we-do');
    expect(whatWeDoSection).toBeInTheDocument();
  });

  it('What we do section render with props in Home Page', () => {
    renderHomePage({
      whatWeDo: {
        groupsPractices: [
          {
            groupPractices: 'Corporate Transactions & Business',
            groupIcon: 'Briefcase',
            practices: [
              {
                databaseId: 165922,
                uri: '/practices/corporate-governance-lawyers-and-regulatory-compliance',
                title: 'Corporate Governance Lawyers and Regulatory Compliance',
                practicesIncluded: {
                  childPractice: null,
                  description:
                    '<p><span style="font-weight: 400;">Partnering with experienced corporate governance lawyers is the best way to ensure that you are operating your business in full compliance with state and federal regulations. Scarinci Hollenbeck’s highly qualified attorneys have <a href="https://scarincihollenbeck.com/contact">decades of experience</a> advising on sophisticated transactions, counseling on critical corporate governance matters, and guiding a diverse clientele through a changing regulatory landscape.</span></p>\n',
                },
              },
              {
                databaseId: 28270,
                uri: '/practices/corporate-transactions-business',
                title: 'Corporate Transactions & Business',
                practicesIncluded: {
                  childPractice: [
                    {
                      databaseId: 28282,
                      title: 'Financing Group',
                      uri: '/practices/financing-group',
                    },
                    {
                      databaseId: 28283,
                      title: 'Healthcare & Hospital Law',
                      uri: '/practices/health-and-hospital-law',
                    },
                  ],
                  description:
                    '<p>Our clients rely on us to help resolve impediments, take advantage of opportunities, anticipate problems, and minimize surprises down the road regarding their business.</p>\n',
                },
              },
            ],
          },
        ],
      },
    });

    const whatWeDoSection = screen.getByTestId('what-we-do');
    expect(whatWeDoSection).toBeInTheDocument();
  });

  it('What we do tabs component render without props', () => {
    render(
      <ReduxProvider>
        <PracticesTabs />
      </ReduxProvider>,
    );

    const tabs = screen.getByTestId('practices-tabs');
    expect(tabs).toBeInTheDocument();
  });

  it('What we do tabs component render with props', () => {
    render(
      <ReduxProvider>
        <PracticesTabs
          groupsPractices={[
            {
              groupPractices: 'Corporate Transactions & Business',
              groupIcon: 'Briefcase',
              practices: [
                {
                  databaseId: 165922,
                  uri: '/practices/corporate-governance-lawyers-and-regulatory-compliance',
                  title:
                    'Corporate Governance Lawyers and Regulatory Compliance',
                  practicesIncluded: {
                    childPractice: null,
                    description:
                      '<p><span style="font-weight: 400;">Partnering with experienced corporate governance lawyers is the best way to ensure that you are operating your business in full compliance with state and federal regulations. Scarinci Hollenbeck’s highly qualified attorneys have <a href="https://scarincihollenbeck.com/contact">decades of experience</a> advising on sophisticated transactions, counseling on critical corporate governance matters, and guiding a diverse clientele through a changing regulatory landscape.</span></p>\n',
                  },
                },
                {
                  databaseId: 28270,
                  uri: '/practices/corporate-transactions-business',
                  title: 'Corporate Transactions & Business',
                  practicesIncluded: {
                    childPractice: [
                      {
                        databaseId: 28282,
                        title: 'Financing Group',
                        uri: '/practices/financing-group',
                      },
                      {
                        databaseId: 28283,
                        title: 'Healthcare & Hospital Law',
                        uri: '/practices/health-and-hospital-law',
                      },
                    ],
                    description:
                      '<p>Our clients rely on us to help resolve impediments, take advantage of opportunities, anticipate problems, and minimize surprises down the road regarding their business.</p>\n',
                  },
                },
              ],
            },
          ]}
        />
      </ReduxProvider>,
    );

    const tabs = screen.getByTestId('practices-tabs');
    expect(tabs).toBeInTheDocument();
  });

  it('What we do practice card component render without child list', () => {
    render(
      <PracticeCard
        key={165922}
        icon="Briefcase"
        title="Corporate Governance Lawyers and Regulatory Compliance"
        link="/practices/corporate-governance-lawyers-and-regulatory-compliance"
        text='<p><span style="font-weight: 400;">Partnering with experienced corporate governance lawyers is the best way to ensure that you are operating your business in full compliance with state and federal regulations. Scarinci Hollenbeck’s highly qualified attorneys have <a href="https://scarincihollenbeck.com/contact">decades of experience</a> advising on sophisticated transactions, counseling on critical corporate governance matters, and guiding a diverse clientele through a changing regulatory landscape.</span></p>\n'
        list={null}
        setIsShowContactModal={mockSetIsShowContactModal}
      />,
    );

    const consultationButton = screen.getByText(/Free consultation/i);

    fireEvent.click(consultationButton);

    expect(mockSetIsShowContactModal).toHaveBeenCalledWith(true);
  });

  it('What we do practice card component render with child list', () => {
    render(
      <ReduxProvider>
        <PracticeCard
          key={165922}
          icon="Briefcase"
          title="Corporate Governance Lawyers and Regulatory Compliance"
          link="/practices/corporate-governance-lawyers-and-regulatory-compliance"
          text='<p><span style="font-weight: 400;">Partnering with experienced corporate governance lawyers is the best way to ensure that you are operating your business in full compliance with state and federal regulations. Scarinci Hollenbeck’s highly qualified attorneys have <a href="https://scarincihollenbeck.com/contact">decades of experience</a> advising on sophisticated transactions, counseling on critical corporate governance matters, and guiding a diverse clientele through a changing regulatory landscape.</span></p>\n'
          list={[
            {
              databaseId: 165922,
              uri: '/practices/corporate-governance-lawyers-and-regulatory-compliance',
              title: 'Corporate Governance Lawyers and Regulatory Compliance',
              practicesIncluded: {
                childPractice: null,
                description:
                  '<p><span style="font-weight: 400;">Partnering with experienced corporate governance lawyers is the best way to ensure that you are operating your business in full compliance with state and federal regulations. Scarinci Hollenbeck’s highly qualified attorneys have <a href="https://scarincihollenbeck.com/contact">decades of experience</a> advising on sophisticated transactions, counseling on critical corporate governance matters, and guiding a diverse clientele through a changing regulatory landscape.</span></p>\n',
              },
            },
            {
              databaseId: 28270,
              uri: '/practices/corporate-transactions-business',
              title: 'Corporate Transactions & Business',
              practicesIncluded: {
                childPractice: [
                  {
                    databaseId: 28282,
                    title: 'Financing Group',
                    uri: '/practices/financing-group',
                  },
                  {
                    databaseId: 28283,
                    title: 'Healthcare & Hospital Law',
                    uri: '/practices/health-and-hospital-law',
                  },
                ],
                description:
                  '<p>Our clients rely on us to help resolve impediments, take advantage of opportunities, anticipate problems, and minimize surprises down the road regarding their business.</p>\n',
              },
            },
          ]}
          setIsShowContactModal={mockSetIsShowContactModal}
        />
      </ReduxProvider>,
    );

    const viewServicesButton = screen.getByText(/View services/i);

    fireEvent.click(viewServicesButton);

    const modal = screen.getByTestId('modal-container');
    expect(modal).toHaveStyle('z-index: 1055');

    const closeModalButton = within(modal).getByLabelText('Close modal');
    expect(closeModalButton).toBeInTheDocument();

    fireEvent.click(closeModalButton);

    expect(modal).toHaveStyle('z-index: -1');
  });

  it('Why choose us section render without props in Home Page', () => {
    renderHomePage();

    const whyChooseUsSection = screen.getByTestId('why-choose-us');
    expect(whyChooseUsSection).toBeInTheDocument();
  });

  it('Why choose us section render with props in Home Page', () => {
    renderHomePage({
      whyChooseUs: {
        title: 'Why choose us?',
        article:
          '<p>At Scarinci Hollenbeck, our dedicated attorneys boast multiple decades of extensive experience handling cases tied to securities investigations.</p>\n<p>Whether you’re dealing with SEC compliance, DOJ inquiries, AG investigations, or related matters, you can count on our unwavering legal support to help you navigate the process and achieve the best possible outcome.</p>\n',
        serviceList: [
          {
            service: 'Dedicated attorneys ',
          },
          {
            service: 'We offer strategic',
          },
          {
            service: 'Unwavering legal support',
          },
          {
            service: 'Customer focus',
          },
        ],
        focusedServicesCards: [
          {
            title: 'Dedicated attorneys ',
            text: '<p>When your livelihood is on the line, an attorney who is well-versed in securities law and the ever-changing regulatory environment is paramount.</p>\n',
            icon: 'Practices',
          },
          {
            title: 'We offer strategic',
            text: '<p>We offer strategic legal counsel that acknowledges the distinct challenges faced by officers, directors, and companies embroiled in SEC, DOJ, or AG investigations.</p>\n',
            icon: 'Map',
          },
          {
            title: 'Unwavering legal support',
            text: '<p>You can count on our unwavering legal support to help you navigate the process and achieve the best possible outcome.</p>\n',
            icon: 'Documents',
          },
          {
            title: 'Customer focus',
            text: '<p>Collaboratively, we work with you to grasp the unique intricacies of your circumstances, adapting our legal strategies to align with your goals.</p>\n',
            icon: 'Scope',
          },
        ],
      },
    });

    const whyChooseUsSection = screen.getByTestId('why-choose-us');
    expect(whyChooseUsSection).toBeInTheDocument();
  });

  it('LatestPostsSection render in Home Page', () => {
    renderHomePage();

    const latestPostsSection = screen.getByTestId('latest-posts');
    expect(latestPostsSection).toBeInTheDocument();
  });

  it('LatestPostsSection component render', () => {
    render(<LatestPostsSection />);

    const disclaimerElement = screen.getByText(
      'No aspect of the advertisement has been approved by the Supreme Court.',
    );

    expect(disclaimerElement).toBeInTheDocument();
  });

  it('Awards section render without props in Home Page', () => {
    renderHomePage();

    const awardsSection = screen.getByTestId('awards');
    expect(awardsSection).toBeInTheDocument();
  });

  it('Awards section render with props in Home Page', () => {
    renderHomePage({
      awards: [
        {
          appearanceOrder: 1,
          imageHeight: '149',
          imageWidth: '179',
          label: '2024 NJ Super Lawyers',
          year: 2024,
          awardImage: {
            sourceUrl:
              'https://res.cloudinary.com/scarinci-hollenbeck/images/f_auto,q_auto/v1712090898/wp.scarincihollenbeck/sl-badge-l-w-2024/sl-badge-l-w-2024.png?_i=AA',
          },
        },
        {
          appearanceOrder: 2,
          imageHeight: '190',
          imageWidth: '190',
          label:
            'US News & World Report - Best Companies to Work For - Law Firms 2024',
          year: 2024,
          awardImage: {
            sourceUrl:
              'https://res.cloudinary.com/scarinci-hollenbeck/images/f_auto,q_auto/v1708360623/wp.scarincihollenbeck/Companies-BestCompaniesLawFirms/Companies-BestCompaniesLawFirms.png?_i=AA',
          },
        },
      ],
    });

    const awardsSection = screen.getByTestId('awards');
    expect(awardsSection).toBeInTheDocument();
  });

  it('Awards component render', () => {
    render(
      <Awards
        awards={[
          {
            appearanceOrder: 1,
            imageHeight: '149',
            imageWidth: '179',
            label: '2024 NJ Super Lawyers',
            year: 2024,
            awardImage: {
              sourceUrl:
                'https://res.cloudinary.com/scarinci-hollenbeck/images/f_auto,q_auto/v1712090898/wp.scarincihollenbeck/sl-badge-l-w-2024/sl-badge-l-w-2024.png?_i=AA',
            },
          },
          {
            appearanceOrder: 2,
            imageHeight: '190',
            imageWidth: '190',
            label:
              'US News & World Report - Best Companies to Work For - Law Firms 2024',
            year: 2024,
            awardImage: {
              sourceUrl:
                'https://res.cloudinary.com/scarinci-hollenbeck/images/f_auto,q_auto/v1708360623/wp.scarincihollenbeck/Companies-BestCompaniesLawFirms/Companies-BestCompaniesLawFirms.png?_i=AA',
            },
          },
        ]}
      />,
    );

    const disclaimerElement = screen.getByText(
      'No aspect of the advertisement has been approved by the Supreme Court.',
    );

    expect(disclaimerElement).toBeInTheDocument();

    const awardsMethodologyButton = screen.getByRole('link', {
      name: /Award Methodology/i,
    });

    expect(awardsMethodologyButton).toBeInTheDocument();

    expect(awardsMethodologyButton).toHaveAttribute('href', '/awards');
  });

  it('Offices locations component render', async () => {
    const offices = [
      {
        databaseId: 29436,
        slug: 'little-falls',
        title: 'Little Falls, NJ',
        addressLocality: 'Little Falls',
        addressRegion: 'NJ',
        mapAddress: 'Scarinci+Hollenbeck+Clove+Road',
        phone: '201-896-4100',
        streetAddress: '150 Clove Road',
        fax: '201-896-8660',
        floor: '9th Floor',
        postCode: '07424',
        autoMap:
          'https://res.cloudinary.com/scarinci-hollenbeck/images/v1667410295/wp.scarincihollenbeck/automap/automap.pdf?_i=AA',
        trainStationsMap:
          'https://res.cloudinary.com/scarinci-hollenbeck/images/v1666334530/wp.scarincihollenbeck/NJ-TRANSIT-Rail-System-Map-–-October-2021/NJ-TRANSIT-Rail-System-Map-–-October-2021.pdf?_i=AA',
      },
      {
        databaseId: 294368,
        slug: 'new-york',
        title: 'New Yogrk City',
        addressLocality: 'New York',
        addressRegion: 'NY',
        mapAddress: 'Scarinci+Hollenbeck+New-York',
        phone: '212-286-0747',
        streetAddress: '519 8th Avenue',
        fax: '212-808-4155',
        floor: '25th Floor',
        postCode: '10018',
        autoMap: null,
        trainStationsMap: null,
      },
    ];

    render(
      <ReduxProvider>
        <AllOfficeLocations offices={offices} />
      </ReduxProvider>,
    );

    const mapSection = screen.getByTestId('offices-map');
    expect(mapSection).toBeInTheDocument();

    const locationsTabs = within(mapSection).getByTestId('locations-tabs');
    expect(locationsTabs).toBeInTheDocument();

    const allTexts = within(locationsTabs).getAllByText('Little Falls, NJ');
    const littleFallsTab = allTexts[0];
    expect(littleFallsTab).toBeInTheDocument();

    fireEvent.click(littleFallsTab);

    const littleFallsHeading = screen.getByRole('heading', {
      name: /Little Falls, NJ/i,
    });
    expect(littleFallsHeading).toBeInTheDocument();

    const littleFallsOffice = offices.find(
      (office) => office.title === 'Little Falls, NJ',
    );
    expect(littleFallsOffice).toBeDefined();

    expect(littleFallsOffice.autoMap).toBeDefined();
    expect(littleFallsOffice.trainStationsMap).toBeDefined();

    const trainMapLink = screen.getByRole('link', {
      name: /NJ Transit Rail System Map/i,
    });
    const autoMapLink = screen.getByRole('link', {
      name: /Directions to the Overlook Corporate Center/i,
    });

    expect(autoMapLink).toHaveAttribute('href', littleFallsOffice.autoMap);
    expect(trainMapLink).toHaveAttribute(
      'href',
      littleFallsOffice.trainStationsMap,
    );
  });
});
