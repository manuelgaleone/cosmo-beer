import React, { useEffect, useState } from 'react';
import { Row, Button } from "react-bootstrap"

import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

import tidevoLogo from '../../public/media/tidevounabirra-yellow.svg'

const Challenge = () => {
  const router = useRouter();

  return (
    <Row className='vh-100 back-wave-1'>
      <div className='col-12 col-lg-3 m-0 p-3 d-flex justify-content-center'>
          
      </div>
    </Row>
  );
};

export default Challenge;
