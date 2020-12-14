import { css } from '@emotion/react';
import Layout from '../components/layout/Layout';
import { Formulario, Campo, InputSubmit, Error } from '../components/ui/Formulario';

import firebase from '../firebase';

// validaciones
import UseValidation from '../hooks/UseValidation';
import validarCrearCuenta from '../validacion/validarCrearCuenta';

export default function CrearCuenta() {

  const INITIAL_STATE = {
    nombre : '',
    email : '',
    password: ''
  }

  const { 
    valores,
    errores,
    submitForm,
    handleSubmit,
    handleChange,
    handleBlur

  } = UseValidation(INITIAL_STATE, validarCrearCuenta, crearCuenta);

  const { nombre, email, password } = valores;

  async function crearCuenta() {

    try {

      await firebase.register(nombre, email, password)

    } catch (error) {
      console.error('Hubo un error al crear usuario', error.message)
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
        > Create Account </h1>
        <Formulario
          onSubmit={handleSubmit}
        >

          <Campo>
            <label htmlFor="nombre"> Nombre </label>
            <input 
              type="text"
              id="nombre"
              placeholder="Your Name"
              name="nombre"
              value={nombre}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Campo>

          {errores.nombre && <Error> {errores.nombre} </Error>}

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

          <InputSubmit
            type="submit"
            value="Create Account"
          />

        </Formulario>
      </Layout>

    </div>
  )
}