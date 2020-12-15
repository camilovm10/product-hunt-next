import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

function useAutenticacion() {

    const [ usuarioAutenticado, setUsuarioAutenticado ] = useState(null);

    useEffect(() => {

        const unsuscribe = firebase.auth.onAuthStateChanged(usuario => {  // Guarda la sesion del usuario
            if(usuario) {
                setUsuarioAutenticado(usuario);
            } else {
                setUsuarioAutenticado(null);
            }
        })
        
        return () => unsuscribe();

    }, [])

    return usuarioAutenticado;

}

export default useAutenticacion;
