import React, { useState } from 'react';
import { Row, Button, Form } from "react-bootstrap"

import beerTitle from '../public/media/title-login.svg'
import cosmoAccent from '../public/media/cosmo-yellow.svg'

import Image from 'next/image';
import InputText from '../components/Input';

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {

      console.log(email, password)

    } catch (err) { console.log(err) }
  }

  return (
    <Row className='vh-100'>
      <div className='d-flex m-0 p-0'>
        <div className='col-12 col-lg-7 m-0 back-beer-1 p-3 d-none d-lg-flex justify-content-center'>
          <Image
            src={beerTitle}
            alt='Beer title'
            className='beer-login-title img-fluid'
          />
        </div>
        <div className='col-12 col-lg-5 m-0 back-accent-super-light d-flex flex-column justify-content-between align-items-center py-5'>
          <div className='col-8 login-content p-0 m-0'>
            <h6 className='accent pb-5 p-0 m-0 text-end'>TI DEVO UNA BIRRA</h6>
            <h2 className='bebas-regular pt-3 m-0'>LOGIN</h2>
            <div>
              <Form className='login-form-container d-flex flex-column'>
                <InputText
                  label="Email"
                  id="email"
                  type="text"
                  value={email}
                  setValue={setEmail}
                  placeholder="es. mario.rossi@gmail.com"
                />
                <InputText
                  label="Password"
                  id="password"
                  type="password"
                  value={password}
                  setValue={setPassword}
                  placeholder="Password"
                />
                <h6 className='text-end blue-light p-0 m-0 pb-3'>Password dimenticata</h6>
                <Button className="back-accent accent-super-light border border-none">LOG IN</Button>
              </Form>
              <h6 className='text-center p-0 m-0 py-3'>Non hai un Account? <span className='blue-light p-0 m-0'>Registrati</span></h6>
            </div>
          </div>
          <div className='col-12 login-footer d-flex align-items-center justify-content-center gap-2'>
              <h6 className='accent p-0 m-0'>Questa birra è offerta da</h6>
              <Image
              alt='Cosmo logo'
              src={cosmoAccent}
              />
            </div>
        </div>
      </div>
    </Row>
  );
};

export default Login;
