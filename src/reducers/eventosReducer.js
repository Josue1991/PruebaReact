import {
    FETCH_EVENTOS_REQUEST,
    FETCH_EVENTOS_SUCCESS,
    FETCH_EVENTOS_FAILURE,
    ADD_EVENTO,
    UPDATE_EVENTO,
    DELETE_EVENTO
} from '../actions/EventoAcciones';

const initialState = {
    eventos: [],
    loading: false,
    error: null
};

const eventosReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EVENTOS_REQUEST:
            return { ...state, loading: true };
        case FETCH_EVENTOS_SUCCESS:
            return { ...state, loading: false, eventos: action.payload };
        case FETCH_EVENTOS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case ADD_EVENTO:
            return { ...state, eventos: [...state.eventos, action.payload] };
        case UPDATE_EVENTO:
            return {
                ...state,
                eventos: state.eventos.map(evento =>
                    evento.id === action.payload.id ? action.payload : evento
                )
            };
        case DELETE_EVENTO:
            return {
                ...state,
                eventos: state.eventos.filter(evento => evento.id !== action.payload)
            };
        default:
            return state;
    }
};

export default eventosReducer;
