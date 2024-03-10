import React, { useEffect } from 'react';
import Head from 'next/head';

import { ToastContainer } from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const MainLayout = ({ children }) => {

  const router = useRouter();
  const isAuth = useSelector(state => state.user.isAuth);

  useEffect(() => {
    const protectedRoutes = ['/user', '/challenge'];
    const nonAccessibleRoutes = ['/login'];

    if (!isAuth && protectedRoutes.includes(router.pathname)) {
      router.replace('/login');
    } else if (isAuth && nonAccessibleRoutes.includes(router.pathname)) {
      router.replace('/challenge');
    }

  }, [router.pathname]);

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
