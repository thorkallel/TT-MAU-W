import React, { useReducer } from 'react';

import axios from 'axios';

import criptoContext from './criptoContext';
import criptoReducer from './criptoReducer';

import {
	CARGAR_CRIPTO,
	GUARDAR_CRIPTO
} from '../../types/'

const CriptoState = props => {

	// State inicial
	const initialState = {
		datacripto: [],
		criptomoneda: '',
		loadstate: true
	}

	// Funcion para traer la data de las cripto desde la api
	const fGetDatacripto = () => {

		var config = {
			method: 'get',
			url: `https://api.coinlore.net/api/tickers/?start=0&limit=20`,
			headers: { }
		};

		axios(config)
		.then(function (response) {
			dispatch({
				type: CARGAR_CRIPTO,
				payload: response.data.data
			})
		})
		.catch(function (error) {
			console.log(error);
		});

	}

	// Funcion guardar criptomoneda
	const fSaveCripto = (passcripto) => {

		dispatch({
			type: GUARDAR_CRIPTO,
			payload: passcripto
		})

	}

	// Crear el dispatch y el state
	const [state, dispatch] = useReducer(criptoReducer, initialState);

	return (
		<criptoContext.Provider
			value={{
				datacripto: state.datacripto,
				loadstate: state.loadstate,
				criptomoneda: state.criptomoneda,

				fGetDatacripto,
				fSaveCripto
			}}
		>
			{props.children}
		</criptoContext.Provider>
	)

}

export default CriptoState;