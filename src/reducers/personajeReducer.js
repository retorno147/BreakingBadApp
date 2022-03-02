import { types } from '../types/types';

const initialState = {
    protagonistas: [],
    datosProtagonista: {},
    fraseCelebre: {},
    loading: false
}


export const personajeReducer = ( state = initialState, action) => {

    switch (action.type) {

        
        case types.listPersonajesLoaded:

            return{
                ...state,
                protagonistas: [...action.payload ]
            }
        
        case types.datosPersonajesLoaded:

            return{
                ...state,
                datosProtagonista: {...action.payload }
            }

            case types.frasePersonajeLoaded:

                return{
                    ...state,
                    fraseCelebre: {...action.payload }
            }

            case types.spinnerLoaded:

                return{
                    ...state,
                    loading: action.payload
            }
        
        default:
            return state;
    }
}