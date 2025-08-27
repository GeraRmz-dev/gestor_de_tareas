//Importaciones requeridas:
// Aqui se importan los hooks que usare de react 
import { useState, useEffect } from 'react';

//El hook recibe una clave y un valor inicial
function useLocalStorage(key, valorInicial){
    
    //Construyo un estado y se obtiene el valor de App.jsx
    const [ valor, setValor ] = useState(() => {
        try {
            const valorAlmacenado = localStorage.getItem(key);
            return valorAlmacenado ? JSON.parse(valorAlmacenado) : valorInicial;
        }catch (error) {
            console.error(error);
            return valorInicial;
        }
    });

    //Uso useEffect para guardar en LocalStorage los valores que cambian

    useEffect(() => {
        try{
            localStorage.setItem(key, JSON.stringify(valor));
        }catch (error){
            console.error(error);
        }
    }, [key, valor]); //Indica que se modificara si el valor o la llave cambian

    //Este return se encargara de devolver el valor y la funcion para actualizarlo
    return [valor, setValor];
}

export default useLocalStorage;