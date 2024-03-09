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
        <title>Cosmo - Beer Project</title>
      </Head>
      <div className='body-container'>
        <main className='content'>{children}</main>
      </div>
    </>
  );
};

export default MainLayout;
