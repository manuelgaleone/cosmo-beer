import React, { useEffect, useRef, useState } from 'react';
import { Row, Button, Form } from "react-bootstrap"

import beerTitle from '../public/media/tidevounabirra-accent-light.svg'
import cosmoWhite from '../public/media/cosmo-white.svg'

import Image from 'next/image';
import InputText from '../components/Input';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { setIsAuth } from '../redux/actions/userActions';
import Link from 'next/link';
import { gsap } from 'gsap';

const Home = () => {
  const router = useRouter();
  const dispatch = useDispatch()

  const hoverRef = useRef();

  useEffect(() => {
    const element = hoverRef.current;
    gsap.set(element, { scale: 1, opacity: 1 });

    const enterAnimation = () => gsap.to(element, { scale: 1.05, opacity: 0.8, duration: 0.5 });
    const leaveAnimation = () => gsap.to(element, { scale: 1, opacity: 1, duration: 0.5 });

    element.addEventListener('mouseenter', enterAnimation);
    element.addEventListener('mouseleave', leaveAnimation);

    return () => {
      element.removeEventListener('mouseenter', enterAnimation);
      element.removeEventListener('mouseleave', leaveAnimation);
    };
  }, []);

  return (
    <Row className='vh-100 back-beer-2 flex-column justify-content-between align-items-center py-5'>
      <div className='col-12 m-0 p-3 d-flex justify-content-center'>
          <Image
            src={cosmoWhite}
            alt='Cosmo logo'
            width={100}
            className='img-fluid'
          />
      </div>
      <div className='col-12 m-0 p-3 d-flex flex-column align-items-center justify-content-center'>
          <Image
            src={beerTitle}
            alt='Beer title'
            ref={hoverRef}
            className='img-fluid'
          />
          <p className='accent-light pt-5'>sfida chi vuoi all'ultima birra</p>
      </div>
      <div className='col-12 m-0 p-3 d-flex flex-column align-items-center justify-content-center'>
          <Link href={'/login'} className='basic-link'>
            <p className='accent-light pt-5'>ENTRA</p>
          </Link>
      </div>
    </Row>
  );
};

export default Home;
