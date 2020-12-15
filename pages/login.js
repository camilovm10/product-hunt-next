import React, { useState } from 'react'
import { css } from '@emotion/react';
import Router from 'next/router';
import Layout from '../components/layout/Layout';
import { Formulario, Campo, InputSubmit, Error } from '../components/ui/Formulario';

import firebase from '../firebase';

// validaciones
import UseValidation from '../hooks/UseValidation';
import validarIniciarSesion from '../validacion/validarIniciarSesion';


const INITIAL_STATE = {
  email : '',
  password: ''
}

export default function Login() {


  const [ error, setError ] = useState('');
  

  const { 
    valores,
    errores,
    submitForm,
    handleSubmit,
    handleChange,
    handleBlur

  } = UseValidation(INITIAL_STATE, validarIniciarSesion, iniciarSesion);

  const { email, password } = valores;

  async function iniciarSesion() {

    try {
      await firebase.login(email, password);
      Router.push('/');
    } catch (error) {
      console.error('Hubo un error al crear usuario', error.message);
      setError(error.message)
    }

  }


  return (
    <div>
      
      <Layout>
        <h1
          css={css`

            text-align: center;
            margin-top: 5rem;
          
          `}
        > Login </h1>
        <Formulario
          onSubmit={handleSubmit}
        >

          

          <Campo>
            <label htmlFor="nombre"> Email </label>
            <input 
              type="email"
              id="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Campo>

          {errores.email && <Error> {errores.email} </Error>}

          <Campo>
            <label htmlFor="nombre"> Password </label>
            <input 
              type="password"
              id="password"
              placeholder="Your Password"
              name="password"
              value={password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Campo>

          {errores.password && <Error> {errores.password} </Error>}

          {error && <Error> {error} </Error>}

          <InputSubmit
            type="submit"
            value="Login"
          />

        </Formulario>
      </Layout>

    </div>
  )
}