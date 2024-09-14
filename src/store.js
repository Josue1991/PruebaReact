import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer'; // Asegúrate de que la ruta sea correcta

const store = createStore(
    rootReducer,
    applyMiddleware(thunk) // Aquí aplicas redux-thunk como middleware
);

export default store;
