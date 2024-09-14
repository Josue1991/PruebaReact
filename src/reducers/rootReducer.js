import { combineReducers } from 'redux';
import eventosReducer from './eventosReducer'; // Asegúrate de que la ruta sea correcta

const rootReducer = combineReducers({
    eventos: eventosReducer
    // Agrega otros reducers aquí si los tienes
});

export default rootReducer;
