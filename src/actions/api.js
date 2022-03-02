import axios from 'axios';
import Swal from 'sweetalert2';
import { types } from "../types/types";

let api = axios.create({
  baseURL: 'https://breakingbadapi.com/api'
});

export const listPersonajes = () => {

  return async( dispatch ) => {
  
    await api.get('/characters')
        .then((response) => {
        const body = response.data
        dispatch( listPersonajesLoaded( body) )
    }).catch((error) => {
      if (error?.response?.status === 401 ){
        Swal.fire('Error', 'No se ha podido conectar con la BBDD, pongase en contacto con el Administrador.', 'error')
      } else {
        dispatch(error.response)
      }
    })
  }
}

const listPersonajesLoaded = ( personajes ) => ({
  type: types.listPersonajesLoaded,
  payload: personajes
})

export const datosPersonaje = (id) => {

  return async( dispatch ) => {
    dispatch( spinnerLoaded( true) )
    await api.get(`/characters/${id}`)
        .then((response) => {
        const body = response.data[0]
        dispatch( datosPersonajesLoaded( body) )
        dispatch( spinnerLoaded( false ) )
    }).catch((error) => {
        if (error?.response?.status === 401 ){
          Swal.fire('Error', 'No se ha podido conectar con la BBDD, pongase en contacto con el Administrador.', 'error')
        } else {
          dispatch(error.response)
        }
    })
  }
}

const datosPersonajesLoaded = ( personaje ) => ({
  type: types.datosPersonajesLoaded,
  payload: personaje
})

export const obtenerFrase = (name) => {

  
  return async( dispatch ) => {
    
    const nombre = name?.replace( " ", '+' )
  
    await api.get(`/quote/random?author=${nombre}`)
        .then((response) => {
        const body = response.data[0]
        dispatch( frasePersonajeLoaded( body) )
    }).catch((error) => {
      if (error?.response?.status === 401 ){
        Swal.fire('Error', 'No se ha podido conectar con la BBDD, pongase en contacto con el Administrador.', 'error')
      } else {
        dispatch(error.response)
      }
    })
  }
}

const frasePersonajeLoaded = ( frase ) => ({
  type: types.frasePersonajeLoaded,
  payload: frase
})

const spinnerLoaded = ( loading ) => ({
  type: types.spinnerLoaded,
  payload: loading
})







