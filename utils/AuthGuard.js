import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const AuthGuard = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    const protectedRoutes = ['/user', '/'];
    const nonAccessibleRoutes = ['/login', '/signup'];

    if (!token && protectedRoutes.includes(router.pathname)) {
      router.replace('/login');
    } else if (token && nonAccessibleRoutes.includes(router.pathname)) {
      router.replace('/company');
    }

  }, [router.pathname]);

  return <>{children}</>;
};

export default AuthGuard;
