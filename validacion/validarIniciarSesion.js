export default function validarIniciarSesion(valores) {


    let errores = {};


    // validar email

    if(!valores.email) {
        errores.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)) {
        errores.email = 'Email not valid'
    }


    // Validar password

    if(!valores.password) {
        errores.password = 'Password is required'
    } else if (valores.password.length < 6) {
        errores.password = 'The password must be at least 6 characters'
    }


    return errores;


}

