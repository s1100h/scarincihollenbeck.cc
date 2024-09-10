import { Provider } from 'react-redux';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import mockRouter from 'next-router-mock';
import { wpGraphQl } from '../redux/services/wp-graphql';
import { appApi } from '../redux/services/project-api';
import attorneysReducer from '../redux/slices/attorneys.slice';
import formsReducer from '../redux/slices/forms.slice';
import sizesReducer from '../redux/slices/sizes.slice';

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

export default ReduxProvider;
