import React, { useReducer } from 'react';

import axios from 'axios';

import cotizacionContext from './cotizacionContext';
import cotizacionReducer from './cotizacionReducer';

import {
	REALIZAR_COTIZACION
} from '../../types/'

const CotizacionState = props => {

	// State inicial
	const initialState = {
		datacotizacion: []
	}

	// Funcion para traer la data de la criptomoneda solicitada
	const fGetDataCotizacion = (criptomoneda) => {

		var config = {
			method: 'get',
			url: `https://api.coinlore.net/api/ticker/?id=${criptomoneda}`,
			headers: { }
		};

		axios(config)
		.then(function (response) {
			dispatch({
				type: REALIZAR_COTIZACION,
				payload: response.data
			})
		})
		.catch(function (error) {
			console.log(error);
		});

	}

	// Crear el dispatch y el state
	const [state, dispatch] = useReducer(cotizacionReducer, initialState);

	return (
		<cotizacionContext.Provider
			value={{
				datacotizacion: state.datacotizacion,

				fGetDataCotizacion
			}}
		>
			{props.children}
		</cotizacionContext.Provider>
	)

}

export default CotizacionState;