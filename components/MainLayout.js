import React from 'react';
import Head from 'next/head';

import { ToastContainer } from 'react-toastify';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = ({ children }) => {
  return (
    <>
    <ToastContainer />
      <Head>
        <link rel="icon" href={'media/favicon.ico'} type="image/x-icon"></link>
        <title>Cosmo - Beer Project</title>
      </Head>
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default MainLayout;
