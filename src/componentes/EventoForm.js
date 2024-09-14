import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEvento } from '../actions/EventoAcciones'; // Asegúrate de que la ruta sea correcta

const EventoForm = () => {
    const [evento, setEvento] = useState({
        nombre: '',
        fecha: '',
        lugar: '',
        descripcion:''
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setEvento({
            ...evento,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addEvento(evento));
    };



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nombre"
                    value={evento.nombre}
                    onChange={handleChange}
                    placeholder="Nombre del evento"
                />
                <input
                    type="date"
                    name="fecha"
                    value={evento.fecha}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="lugar"
                    value={evento.lugar}
                    onChange={handleChange}
                    placeholder="Lugar del evento"
                />
                <input
                    type="text"
                    name="descripcion"
                    value={evento.descripcion}
                    onChange={handleChange}
                    placeholder="Descripcion del evento"
                />
                <button type="submit">Crear Evento</button>                
            </form>            
        </div>
    );
};

export default EventoForm;
