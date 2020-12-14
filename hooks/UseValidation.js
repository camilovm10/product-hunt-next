import React, { useState, useEffect } from 'react';

const UseValidation = (initialState, validar, fn) => {


    const [valores, setValores] = useState(initialState);
    const [errores, seterrores] = useState({});
    const [submitForm, setSubmitForm] = useState(false);

    useEffect(() => {

        if(submitForm) {
            const noErrores = Object.keys(errores).length === 0;

            if(noErrores) {
                fn();
            }
            setSubmitForm(false);
        }

    }, [errores]);

    // Funcion que se ejecuta conforme el usuario escribe algo

    const handleChange = e => {
        setValores({
            ...valores,
            [e.target.name] : e.target.value
        })
    }


    // FUncion que se ejecuta cuando el usuario hace submit

    const handleSubmit = e => {
        e.preventDefault();
        const erroresValidacion = validar(valores);
        seterrores(erroresValidacion);
        setSubmitForm(true);
    }

    // Cuando se realiza el evento blur

    const handleBlur = () => {
        const erroresValidacion = validar(valores);
        seterrores(erroresValidacion);
    }

    return {
        valores,
        errores,
        submitForm,
        handleSubmit,
        handleChange,
        handleBlur
    }
}
export default UseValidation
