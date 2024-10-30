import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import ProfileContacts from 'components/molecules/attorney/ProfileContacts';
import ProfileAccordion from 'components/organisms/attorney/ProfileAccordion';
import ProfileHeader from 'components/organisms/attorney/ProfileHeader';
import ReduxProvider from 'hoks/reduxTestHoc';
import ApolloWrapper from 'layouts/ApolloWrapper';
import { useRouter } from 'next/router';
import renderer from 'react-test-renderer';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

useRouter.mockReturnValue({
  pathname: '/attorneys/[slug]',
  route: '/attorneys/[slug]',
  query: { slug: 'kaylin-n-olsen' },
  asPath: '/attorneys/kaylin-n-olsen',
});

jest.mock('next/image', () => ({
  __esModule: true,

  default: ({
    blurDataURL, priority, fill, ...props
  }) => (
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    <img {...props} />
  ),
}));

describe('Attorney page', () => {
  it('Profile header component render', () => {
    const props = {
      name: 'Ronald S. Bienstock',
      profileImage: 'https://dummyimage.com/500x500/fff/aaa',
      contact: {
        vizibility: 'https://viz.me/Kolsen',
        pdf: 'https://res.cloudinary.com/scarinci-hollenbeck/wp.scarincihollenbeck/Olsen.pdf?_i=AA',
      },
    };
    render(
      <ReduxProvider>
        <ProfileHeader {...props} />
      </ReduxProvider>,
    );

    const profileHeaderContainer = screen.getByTestId('profile-header');
    expect(profileHeaderContainer).toBeInTheDocument();

    const titleProfile = within(profileHeaderContainer).getByRole('heading', {
      level: 1,
    });
    expect(titleProfile).toBeInTheDocument();
    expect(titleProfile.tagName).toBe('H1');
    expect(titleProfile.textContent).toBe(props?.name);

    const images = within(profileHeaderContainer).getAllByRole('img');
    const imageProfile = images.find((img) => img.alt === props?.name);
    expect(imageProfile).toBeInTheDocument();
    expect(imageProfile).toHaveAttribute(
      'src',
      expect.stringContaining(props?.profileImage),
    );

    const contactButton = within(profileHeaderContainer).getByRole('button', {
      name: /Contact now/i,
    });
    expect(contactButton).toBeInTheDocument();

    fireEvent.click(contactButton);

    const modal = profileHeaderContainer.querySelector('.modal-open');
    expect(modal).toBeInTheDocument();

    const printBioButton = within(profileHeaderContainer).getByRole('link', {
      name: /Print Bio/i,
    });

    expect(printBioButton).toHaveAttribute('href', props?.contact?.pdf);

    const businessCardButton = within(profileHeaderContainer).getByRole(
      'link',
      {
        name: /Business Card/i,
      },
    );
    expect(businessCardButton).toHaveAttribute(
      'href',
      props?.contact?.vizibility,
    );
  });

  it('Contacts snapshot', () => {
    const profileDetailsProps = {
      offices: [
        {
          link: '/location/little-falls',
          name: 'Little Falls',
          ID: 'cG9zdDoyOTQzNg==',
        },
      ],
      fax: '201-896-8660',
      contact: {
        phoneNumber: '201-896-7029 ',
        email: 'kolsen@sh-law.com',
        fax: '201-896-8660',
        vizibility: 'https://viz.me/Kolsen',
        pdf: 'https://res.cloudinary.com/scarinci-hollenbeck/wp.scarincihollenbeck/Olsen.pdf?_i=AA',
        socialMediaLinks: [
          {
            url: 'https://www.linkedin.com/company/scarinci-hollenbeck-llc/',
            channel: 'LinkedIn',
          },
        ],
      },
      linkedIn: {
        url: 'https://www.linkedin.com/company/scarinci-hollenbeck-llc/',
        channel: 'LinkedIn',
      },
    };
    const tree = renderer
      .create(<ProfileContacts {...profileDetailsProps} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Profile accordion component render', async () => {
    const props = {
      clients: [
        {
          clientImage: {
            sourceUrl:
              'https://res.cloudinary.com/scarinci-hollenbeck/images/f_auto,q_auto/v1642542645/wp.scarincihollenbeck/PEAVEY/PEAVEY.jpg?_i=AA',
            altText: 'PEAVEY',
            mediaDetails: { height: 300, width: 300 },
          },
          clientLink: null,
          clientTitle: 'peavey',
        },
        {
          clientImage: {
            sourceUrl:
              'https://res.cloudinary.com/scarinci-hollenbeck/images/f_auto,q_auto/v1642542638/wp.scarincihollenbeck/PHANTOM/PHANTOM.jpg?_i=AA',
            altText: 'PHANTOM',
            mediaDetails: { height: 300, width: 300 },
          },
          clientLink: null,
          clientTitle: 'phantom',
        },
      ],
    };
    render(
      <ApolloWrapper>
        <ProfileAccordion {...props} />
      </ApolloWrapper>,
    );

    await waitFor(() => {
      const accordionContainer = screen.getByTestId('profile-accordion');
      expect(accordionContainer).toBeInTheDocument();

      // Test clients section in accordion
      if (props?.clients?.length > 0) {
        const clientsAccordionItem = within(accordionContainer).getByTestId(
          'profile-clients-list',
        );
        expect(clientsAccordionItem).toBeInTheDocument();

        const titles = within(clientsAccordionItem).getAllByRole('heading', {
          level: 3,
        });

        const sliderTitle = titles.find(
          (title) => title.textContent === 'Clients',
        );
        expect(sliderTitle).toBeInTheDocument();

        const sliderContainer = clientsAccordionItem.querySelector('.slider-container');
        const clientSlides = within(sliderContainer).getAllByRole('img');
        expect(clientSlides).toHaveLength(props.clients.length);

        const clientsAccordionButton = within(clientsAccordionItem).getByRole(
          'button',
          { name: /Clients List/i },
        );

        expect(clientsAccordionButton).toBeInTheDocument();

        fireEvent.click(clientsAccordionButton);

        const clientsAccordionBody = clientsAccordionItem.querySelector('.accordion-body');
        const clientsList = within(clientsAccordionBody).getAllByRole('listitem');
        expect(clientsList).toHaveLength(props.clients.length);
      }

      const disclaimer = within(accordionContainer).getByText(
        /No Aspect of the advertisement has been approved by the Supreme Court. Results may vary depending on your particular facts and legal circumstances./i,
      );
      expect(disclaimer).toBeInTheDocument();
    });
  });
});
