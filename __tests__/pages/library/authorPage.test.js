import { render, screen, within } from '@testing-library/react';
import ReduxProvider from '../../../hoks/reduxTestHoc';
import SubHeader from '../../../layouts/SubHeader/SubHeader';
import LibrarySideBar from '../../../components/organisms/library/LibrarySideBar';
import {
  authors,
  childrenOfCurrentCategory,
  popularCategories,
} from '../../../__mocks__/authorPage.mock';

// Render the SubHeader component for testing
const renderAttorneyPage = (props) => render(
  <ReduxProvider>
    <SubHeader
      isFilter={false}
      title={props.title}
      subtitle={props.description}
    />
  </ReduxProvider>,
);

// Render the LibrarySideBar component for testing
const renderAuthorPage = (props) => render(
  <ReduxProvider>
    <LibrarySideBar {...props} />
  </ReduxProvider>,
);

describe('The Author page', () => {
  it('The H1 renders', () => {
    renderAttorneyPage({
      title: 'Author is cool',
      description: 'and it`s awesome',
    });

    // Ensure the H1 heading renders correctly
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
  });

  it('The link to visit an author profile renders', () => {
    renderAuthorPage({
      authors,
      authorsIsLoading: false,
      childrenOfCurrentCategory,
      isAuthor: true,
      popularCategories,
      profileUrl: '/attorneys/dennis-c-linken',
    });

    // Ensure the link to the author's profile exists
    const linkToProfile = screen.getByTestId('link-to-profile');
    expect(linkToProfile).toBeInTheDocument();
    expect(linkToProfile.tagName).toBe('A'); // The link should be an anchor element

    // Ensure the authors navigation container renders correctly
    const authorsNavContainer = screen.getByTestId('authors-nav');
    expect(authorsNavContainer).toBeInTheDocument();
    expect(authorsNavContainer.tagName).toBe('NAV'); // The container should be a <nav> element

    // Ensure the authors list exists within the navigation container
    const authorsList = within(authorsNavContainer).getByTestId('authors-list');
    expect(authorsList).toBeInTheDocument();
    expect(authorsList.tagName).toBe('UL'); // The authors list should be an unordered list (UL)

    const authorsItemList = within(authorsList).getAllByRole('listitem');
    expect(authorsItemList[0]).toBeInTheDocument();
    expect(authorsItemList[0].tagName).toBe('LI');

    // Ensure the link to an individual author exists within the list
    const linkToAuthor = within(authorsItemList[0]).getByRole('link');
    expect(linkToAuthor).toBeInTheDocument();
    expect(linkToAuthor.tagName).toBe('A'); // The link should be an anchor element
  });
});
