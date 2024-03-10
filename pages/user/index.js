import React, { useEffect, useState } from 'react';
import { Row, Button } from "react-bootstrap"

import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

import tidevoLogo from '../../public/media/tidevounabirra-yellow.svg'

const Login = () => {
  const router = useRouter();

  const users = useSelector(state => state.user.users);

  return (
    <Row className='vh-100'>
      <div className='col-12 col-lg-3 m-0 back-accent-super-light p-3 d-flex justify-content-center'>
          <Image
          src={tidevoLogo}
          />
      </div>
      <div className='col-12 col-lg-9 m-0 back-accent-light d-flex flex-column justify-content-between align-items-center py-5'>
        
      </div>
    </Row>
  );
};

export default Login;
