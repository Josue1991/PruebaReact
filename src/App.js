import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import EventoForm from './componentes/EventoForm';
import EventoList from './componentes/EventoList';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>Eventos</h1>
                <EventoForm />
                <EventoList />
            </div>
        </Provider>
    );
}

export default App;
