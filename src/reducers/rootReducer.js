import { combineReducers } from 'redux'
import { personajeReducer } from './personajeReducer'

export const rootReducer = combineReducers({
    personaje : personajeReducer
})