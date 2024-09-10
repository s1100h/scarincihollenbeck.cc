import { render, screen } from '@testing-library/react';
import ReduxProvider from '../../../hoks/reduxTestHoc';
import SubHeader from '../../../layouts/SubHeader/SubHeader';
import AttorneyFilters from '../../../components/organisms/attorneys/AttorneyFilters';

const renderAttorneyPage = (props) => render(
  <ReduxProvider>
    <SubHeader
      isFilter={false}
      title={props.title}
      subtitle={props.description}
    />
  </ReduxProvider>,
);

const renderAttorneyFilters = (props) => render(
  <ReduxProvider>
    <AttorneyFilters {...props} />
  </ReduxProvider>,
);
describe('Attorneys page', () => {
  it('The H1 renders', () => {
    renderAttorneyPage({
      title: 'Attorneys is cool',
      description: 'and it`s awesome',
    });

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
  });

  it('The filter renders', () => {
    renderAttorneyFilters();
    const filter = screen.getByTestId('attorneys-filter');
    expect(filter).toBeInTheDocument();
  });
});
