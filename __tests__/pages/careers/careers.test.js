import { render, screen, within } from '@testing-library/react';
import PositionCard, {
  checkAllOffices,
} from 'components/molecules/careers/PositionCard';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

useRouter.mockReturnValue({
  pathname: '/careers',
  route: '/careers',
  query: {},
  asPath: '/careers',
});

describe('Careers page', () => {
  it('Subheader component render', async () => {
    const props = {
      slug: 'careers/tax-partner',
      title: 'Tax Partner',
      miniDescription:
        'Reporting to the Tax, Trusts, and Estates Partner this role will be responsible to provide professional legal counsel and representation for high-net-worth individuals, institutions, and corporations. This role will require extensive experience with planning and structuring business transactions and/or exte',
      positionLocation: 'Little Falls NJ, Red Bank NJ, New York NY',
      positionType: 'Attorney',
      startDate: 'Immediate',
      duration: 'Full-time',
    };

    const location = checkAllOffices(props?.positionLocation);

    const { container } = render(<PositionCard {...props} />);

    const positionCardTitle = screen.getByRole('heading', {
      name: new RegExp(props?.title, 'i'),
      level: 3,
    });

    expect(positionCardTitle).toBeInTheDocument();

    const locationBox = container.querySelector('.position-location-box');
    const tagText = within(locationBox).getByText(
      new RegExp(props?.positionType, 'i'),
    );
    expect(tagText).toBeInTheDocument();

    const locationText = within(locationBox).getByText(
      new RegExp(location, 'i'),
    );
    expect(locationText).toBeInTheDocument();

    const descriptionWrapper = container.querySelector('.job-mini-description');
    const descriptionText = within(descriptionWrapper).getByText(
      new RegExp(props?.miniDescription, 'i'),
    );
    expect(descriptionText).toBeInTheDocument();

    const itemsWithIcon = Array.from(
      container.querySelectorAll('.icon-and-info'),
    );

    const date = itemsWithIcon.find((item) => item.textContent.includes(props?.startDate));
    expect(date).toBeInTheDocument();

    const duration = itemsWithIcon.find((item) => item.textContent.includes(props?.duration));
    expect(duration).toBeInTheDocument();
  });
});
