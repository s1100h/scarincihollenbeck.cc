import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import FAQ from 'components/atoms/FAQ';
import GetInTouchForm from 'components/organisms/practices/GetInTouchForm';
import PracticeAttorneys from 'components/organisms/practices/PracticeAttorneys';
import PracticePageNew from 'components/pages/PracticePageNew';
import ReduxProvider from 'hoks/reduxTestHoc';
import SubHeaderDefault from 'layouts/SubHeader/SubHeaderDefault';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('next/image', () => ({
  __esModule: true,

  default: ({
    blurDataURL, priority, fill, ...props
  }) => (
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    <img {...props} />
  ),
}));

jest.mock('components/organisms/common/GoogleReviews', () => (
  <div>Mocked Google Reviews</div>
));

useRouter.mockReturnValue({
  pathname: '/practices/[slug]',
  route: '/practices/[slug]',
  query: {
    slug: 'blockchain-attorney-cryptocurrency-defense-investigations',
  },
  asPath:
    '/practices/blockchain-attorney-cryptocurrency-defense-investigations',
});

describe('Practice page', () => {
  // This eaches for delete console log in kwesforms js
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    // eslint-disable-next-line no-console
    console.log.mockRestore();
  });

  it('Practice page check section renders', async () => {
    render(
      <ReduxProvider>
        <PracticePageNew />
      </ReduxProvider>,
    );

    await waitFor(() => {
      const subHeaderContainer = screen.getByTestId('default-sub-header');
      expect(subHeaderContainer).toBeInTheDocument();

      const faqWrapper = screen.getByTestId('faq-wrapper');
      expect(faqWrapper).toBeInTheDocument();

      const collapseAttorneys = screen.getByTestId('collapse-attorneys');
      expect(collapseAttorneys).toBeInTheDocument();

      const whyChooseUs = screen.getByTestId('why-choose-us');
      expect(whyChooseUs).toBeInTheDocument();

      const practiceContent = screen.getByTestId('practice-content');
      expect(practiceContent).toBeInTheDocument();
    });
  });

  it('Subheader render with h1 image and card', () => {
    const props = {
      backgroundImage: 'https://dummyimage.com/1280x720/fff/aaa',
      title: 'Test',
      keyContacts: [
        {
          databaseId: 10000000000001,
          link: '/attorneys',
          display_name: 'Scarinci Hollenbeck, LLC',
          keyContactsByPractice: null,
          profileImage: {
            src: '/_next/static/media/sh-mini-diamond-PNG.53606dc9.svg',
            height: 251,
            width: 251,
            blurWidth: 0,
            blurHeight: 0,
          },
          designation: 'The Firm',
          phoneNumber: '201-896-4100',
          email: 'info@sh-law.com',
          officeLocation: [
            {
              databaseId: 29438,
              uri: '/location/new-york',
              title: 'New York City',
            },
            {
              databaseId: 29440,
              uri: '/location/washington-dc',
              title: 'Washington, D.C.',
            },
            {
              databaseId: 29437,
              uri: '/location/red-bank',
              title: 'Red Bank, NJ',
            },
            {
              databaseId: 29436,
              uri: '/location/little-falls',
              title: 'Little Falls, NJ',
            },
          ],
        },
      ],
    };

    render(
      <ReduxProvider>
        <SubHeaderDefault {...props} />
      </ReduxProvider>,
    );

    const subHeaderContainer = screen.getByTestId('default-sub-header');
    expect(subHeaderContainer).toBeInTheDocument();

    const imageSubheader = subHeaderContainer.querySelector('.sub-header__image');
    expect(imageSubheader).toBeInTheDocument();

    const img = within(imageSubheader).getByRole('img');
    expect(img).toBeInTheDocument();

    if (!props.backgroundImage) {
      expect(img).toHaveAttribute(
        'src',
        expect.stringContaining('/images/no-image-found-diamond-750x350.png'),
      );
    } else {
      expect(img).toHaveAttribute(
        'src',
        expect.stringContaining(props.backgroundImage),
      );
    }

    const titleSubHeader = within(subHeaderContainer).getByRole('heading', {
      level: 1,
    });
    expect(titleSubHeader).toBeInTheDocument();
    expect(titleSubHeader.tagName).toBe('H1');

    const attorneyCard = subHeaderContainer.querySelector('.attorney-card-box');
    expect(attorneyCard).toBeInTheDocument();

    const modalOpener = subHeaderContainer.querySelector('.contact-now-btn');
    expect(modalOpener).toBeInTheDocument();

    fireEvent.click(modalOpener);

    const modal = subHeaderContainer.querySelector('.modal-open');
    expect(modal).toBeInTheDocument();
  });

  it('FAQ render', () => {
    render(
      <ReduxProvider>
        <FAQ />
      </ReduxProvider>,
    );

    const faqWrapper = screen.getByTestId('faq-wrapper');
    expect(faqWrapper).toBeInTheDocument();
  });

  it('Attorneys empty collapse render', () => {
    render(<PracticeAttorneys />);

    const attorneysWrapper = screen.getByTestId('collapse-attorneys');
    expect(attorneysWrapper).toBeInTheDocument();

    const emptyText = screen.getByText('Attorneys will appear soon!');
    expect(emptyText).toBeInTheDocument();
  });

  it('Attorneys collapse render', () => {
    const props = {
      attorneys: [
        {
          databaseId: 29076,
          link: '/attorneys/angelo-auteri',
          title: 'Angelo Auteri',
          status: 'publish',
          designation: 'Partner',
          email: 'aauteri@sh-law.com',
          phoneNumber: '201-896-7023',
          lastName: 'Auteri',
          profileImage:
            'https://res.cloudinary.com/scarinci-hollenbeck/images/f_auto,q_auto/v1636806413/wp.scarincihollenbeck/AngeloAttorney-Profile-743x795-1/AngeloAttorney-Profile-743x795-1.jpg?_i=AA',
          officeLocation: [
            {
              databaseId: 29436,
              uri: '/location/little-falls',
              title: 'Little Falls, NJ',
            },
          ],
        },
        {
          databaseId: 29104,
          link: '/attorneys/kenneth-j-hollenbeck',
          title: 'Kenneth J. Hollenbeck',
          status: 'publish',
          designation: 'Partner',
          email: 'khollenbeck@sh-law.com',
          phoneNumber: '201-896-4100',
          lastName: 'Hollenbeck',
          profileImage:
            'https://res.cloudinary.com/scarinci-hollenbeck/images/f_auto,q_auto/v1642542610/wp.scarincihollenbeck/Ken20181/Ken20181.jpg?_i=AA',
          officeLocation: [
            {
              databaseId: 29438,
              uri: '/location/new-york',
              title: 'New York City',
            },
            {
              databaseId: 29436,
              uri: '/location/little-falls',
              title: 'Little Falls, NJ',
            },
          ],
        },
      ],
    };
    render(<PracticeAttorneys {...props} />);

    const attorneysWrapper = screen.getByTestId('collapse-attorneys');
    expect(attorneysWrapper).toBeInTheDocument();

    const attorneysBox = attorneysWrapper.querySelector('.attorneys-list-box');
    expect(attorneysBox).toBeInTheDocument();

    const attorneysBoxCards = attorneysWrapper.querySelectorAll(
      '.vertical-attorney-card',
    );
    expect(attorneysBoxCards).toHaveLength(props.attorneys.length);
  });

  it('GetInTouch form component render', () => {
    render(
      <ReduxProvider>
        <GetInTouchForm />
      </ReduxProvider>,
    );

    const container = screen.getByTestId('get-in-touch-form');
    expect(container).toBeInTheDocument();

    const getInTouchFormTitle = within(container).getByText(/Let's get in touch/i);
    expect(getInTouchFormTitle).toBeInTheDocument();

    const getInTouchForm = container.querySelector('.kwes-form');
    expect(getInTouchForm).toBeInTheDocument();

    const buttons = within(container).getAllByRole('button');
    const submitButton = buttons.find(
      (button) => button.getAttribute('type') === 'submit',
    );
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
    expect(submitButton).toBeDisabled();

    const checkbox = container.querySelector('.disclaimer-input');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute('type', 'checkbox');

    fireEvent.click(checkbox);
    expect(submitButton).toBeEnabled();
  });
});
