import axios from 'axios';

export const FETCH_EVENTOS_REQUEST = 'FETCH_EVENTOS_REQUEST';
export const FETCH_EVENTOS_SUCCESS = 'FETCH_EVENTOS_SUCCESS';
export const FETCH_EVENTOS_FAILURE = 'FETCH_EVENTOS_FAILURE';
export const ADD_EVENTO = 'ADD_EVENTO';
export const UPDATE_EVENTO = 'UPDATE_EVENTO';
export const DELETE_EVENTO = 'DELETE_EVENTO';

const apiUrl = 'http://localhost:5151/api/Eventos'; // Reemplaza con la URL de tu API

export const fetchEventos = () => async dispatch => {
    dispatch({ type: FETCH_EVENTOS_REQUEST });
    try {
        const response = await axios.get(apiUrl);
        dispatch({ type: FETCH_EVENTOS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: FETCH_EVENTOS_FAILURE, payload: error.message });
    }
};

export const addEvento = (evento) => async dispatch => {
    try {
        const response = await axios.post(apiUrl, evento);
        dispatch({ type: ADD_EVENTO, payload: response.data });
    } catch (error) {
        console.error('Error adding evento:', error);
    }
};

export const updateEvento = (evento) => async dispatch => {
    try {
        const response = await axios.put(apiUrl, evento);
        dispatch({ type: UPDATE_EVENTO, payload: response.data });
    } catch (error) {
        console.error('Error updating evento:', error);
    }
};

export const deleteEvento = (id) => async dispatch => {
    try {
        await axios.delete(`${apiUrl}/${id}`);
        dispatch({ type: DELETE_EVENTO, payload: id });
    } catch (error) {
        console.error('Error deleting evento:', error);
    }
};
