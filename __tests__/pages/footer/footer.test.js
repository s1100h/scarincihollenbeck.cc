import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
  act,
} from '@testing-library/react';
import FooterDetails from 'components/shared/Footer/FooterDetails';
import Footer from 'components/shared/Footer/SiteFooter';
import ReduxProvider from 'hoks/reduxTestHoc';
import { useRouter } from 'next/router';
import decodeResponse from 'utils/decodeResponse';
import renderer from 'react-test-renderer';
import { CORE_PRACTICES } from 'utils/constants';
import LinksBox from 'components/shared/Footer/LinksBox';
import SHDiamond from '../../../public/images/sh-mini-diamond-PNG.svg';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

useRouter.mockReturnValue({
  pathname: '/',
  route: '/',
  query: {},
  asPath: '/',
});

jest.mock('utils/decodeResponse', () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockCategoriesData = [
  { id: 608, name: 'Business Law' },
  { id: 98, name: 'Firm News' },
  { id: 5734, name: 'Technology' },
  { id: 2124, name: 'Tax' },
  { id: 99, name: 'Firm Events' },
];

beforeAll(() => {
  global.fetch = jest.fn(() => Promise.resolve());
  decodeResponse.mockResolvedValue({ data: mockCategoriesData });
});

afterAll(() => {
  jest.resetAllMocks();
});

describe('Footer', () => {
  it('Footer panel', async () => {
    await act(async () => {
      render(
        <ReduxProvider>
          <Footer />
        </ReduxProvider>,
      );
    });

    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();

    const footerPanel = screen.getByTestId('footer-nav');
    expect(footerPanel).toBeInTheDocument();

    const subscribePopupOpener = within(footerPanel).getByRole('button', {
      name: /Join our mailing list/i,
    });
    expect(subscribePopupOpener).toBeInTheDocument();

    fireEvent.click(subscribePopupOpener);

    await waitFor(() => {
      const modal = footerPanel.querySelector('.modal-open');
      expect(modal).toBeInTheDocument();
    });

    const logos = within(footer).getAllByRole('img', {
      src: SHDiamond,
    });

    const footerLogo = logos.find(
      (button) => button.getAttribute('alt') === 'sh diamond logo favicon',
    );

    expect(footerLogo).toBeInTheDocument();

    const privacyLink = within(footer).getByRole('link', {
      name: 'Privacy policy',
    });
    const termsLink = within(footer).getByRole('link', {
      name: 'Terms of use',
    });

    expect(privacyLink).toHaveAttribute('href', '/privacy-policy');
    expect(termsLink).toHaveAttribute('href', '/terms-of-use');
  });

  it('Footer links', () => {
    const tree = renderer.create(<FooterDetails />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Footer categories', () => {
    render(<LinksBox title="Core Practices" linksArr={CORE_PRACTICES} />);

    const listTitle = screen.getByText('Core Practices');
    expect(listTitle).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(CORE_PRACTICES?.length);
  });
});
