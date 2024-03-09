import React from 'react';
import MainLayout from '../components/MainLayout';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store';

import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import AuthGuard from '../utils/authGuard';

function MyApp({ Component, pageProps }) {

  return (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MainLayout>
        <AuthGuard>
            <Component {...pageProps} />
        </AuthGuard>
      </MainLayout>
    </PersistGate>
  </Provider>
  );
}

export default MyApp;