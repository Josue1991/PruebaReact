import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEventos, updateEvento } from '../actions/EventoAcciones';

const EventoList = () => {
    const dispatch = useDispatch();
    const eventos = useSelector(state => state.eventos.eventos);

    // Variable de estado para almacenar temporalmente los cambios en un evento
    const [eventoEditado, setEventoEditado] = useState({});

    // Variable de estado para controlar cuándo se deben mostrar los resultados
    const [mostrarResultados, setMostrarResultados] = useState(false);

    // Función para manejar la búsqueda de eventos
    const handleBuscar = () => {
        dispatch(fetchEventos());
        setMostrarResultados(true);
    };

    // Función para manejar los cambios en los inputs del formulario
    const handleChange = (e, id) => {
        const { name, value } = e.target;
        setEventoEditado({
            ...eventoEditado,
            [id]: {
                ...eventoEditado[id],
                [name]: value
            }
        });
    };

    // Función para manejar la actualización del evento
    const actualizarEvento = (evento) => {
        const eventoActualizado = eventoEditado[evento.id] || evento; // Usar cambios si existen, si no usar el original
        dispatch(updateEvento(eventoActualizado));
    };

    return (
        <div>
            <h1>Lista de Eventos</h1>
            <button onClick={handleBuscar}>Buscar Eventos</button>

            {/* Mostrar la tabla solo si hay eventos y se ha presionado el botón de buscar */}
            {mostrarResultados && eventos.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Fecha</th>
                            <th>Lugar</th>
                            <th>Precio</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eventos.map(evento => (
                            <tr key={evento.id}>
                                <td>{evento.Id}</td>
                                <td>
                                    <input
                                        type="text"
                                        name="nombre"
                                        value={eventoEditado[evento.id]?.nombre || evento.nombre}
                                        onChange={(e) => handleChange(e, evento.id)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="date"
                                        name="fecha"
                                        value={eventoEditado[evento.id]?.fecha || evento.fecha}
                                        onChange={(e) => handleChange(e, evento.id)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="lugar"
                                        value={eventoEditado[evento.id]?.lugar || evento.lugar}
                                        onChange={(e) => handleChange(e, evento.id)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        name="precio"
                                        value={eventoEditado[evento.id]?.precio || evento.precio}
                                        onChange={(e) => handleChange(e, evento.id)}
                                    />
                                </td>
                                <td>
                                    <button onClick={() => actualizarEvento(evento)}>
                                        Actualizar Evento
                                    </button>
                                    <button onClick={() => actualizarEvento(evento)}>
                                        Eliminar Evento
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {/* Mostrar un mensaje si no hay eventos después de buscar */}
            {mostrarResultados && eventos.length === 0 && (
                <p>No se encontraron eventos.</p>
            )}
        </div>
    );
};

export default EventoList;
