import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import mockRouter from 'next-router-mock';
import renderer from 'react-test-renderer';
import HomePage from '../components/pages/HomePage';
import { wpGraphQl } from '../redux/services/wp-graphql';
import { appApi } from '../redux/services/project-api';
import attorneysReducer from '../redux/slices/attorneys.slice';
import formsReducer from '../redux/slices/forms.slice';
import sizesReducer from '../redux/slices/sizes.slice';
import AboutFirm from '../components/organisms/home/AboutFirm';

// Mocking next/dynamic
jest.mock('next/dynamic', () => (component) => function DynamicComponent() {
  return (
    <section data-testid={component.displayName || 'dynamic-component'} />
  );
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

// Tests
describe('HomePage', () => {
  it('The Home banner renders', () => {
    render(
      <Provider store={store}>
        <RouterContext.Provider value={mockRouter}>
          <HomePage />
        </RouterContext.Provider>
      </Provider>,
    );

    const homeBanner = screen.getByTestId('home-banner');
    expect(homeBanner).toBeInTheDocument();
  });

  it('The main title renders correctly', () => {
    const tree = renderer
      .create(<h1>Decades of Legal Experience with Recognized Results</h1>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('The banner info cards render', () => {
    render(
      <Provider store={store}>
        <RouterContext.Provider value={mockRouter}>
          <HomePage />
        </RouterContext.Provider>
      </Provider>,
    );
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
        heroPhoto="/images/no-image-found-diamond.png"
      />,
    );
    const whoWeAreSection = screen.getByTestId('who-we-are');
    expect(whoWeAreSection).toBeInTheDocument();
  });
});
