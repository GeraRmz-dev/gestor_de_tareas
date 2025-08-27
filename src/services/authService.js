//Usuario a utilizar para testeo por falta de un back
const Test_user = {
    usuario: 'tester',
    clave: 'test1234'
};

//Aqui defino la funcion de inicio de sesión
export const login = (usuario, clave) => {
    if(usuario === Test_user.usuario && clave === Test_user.clave) {
        //Aqui guardo un 'token' en el local storage si es valido el usuario
        localStorage.setItem('tokenUsuario', 'usuarioLogueado');
        
        //Guardo el nombre del usuario en Local Storage
        localStorage.setItem('usuarioLogueado', usuario);
        return true;
    }
    return false; //Cuando el usuario no es reconocido
};

//Aqui defino la funcion de cierre de sesión
export const logout = () => {
    //Basta con eliminar el token del localStorage
    localStorage.removeItem('tokenUsuario');
    localStorage.removeItem('usuarioLogueado');
}   

//Esta es la funcion con la logica para revisar si se encuentra o no loggeado
export const usuarioLogueado = () => {
    //Solo verifica que el token este en el localStorage
    return localStorage.getItem('tokenUsuario') !== null;
}

//Esta funcion obtiene el usuario guardado
export const getUsuarioLogueado = () => {
    return localStorage.getItem('usuarioLogueado');
}