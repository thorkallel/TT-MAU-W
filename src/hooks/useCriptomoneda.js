import React, { Fragment, useState } from 'react';

const useCriptomoneda = (label, stateInicial, opciones) => {

	// STATE DE NUESTRO CUSTOM HOOK

	// Utilizar useCriptomoneda
	const [state, actualizarState] = useState(stateInicial);

	const SelectCripto = () => (
		<Fragment>
			<label>{ label }</label>
			<select
			 	onChange={e => actualizarState(e.target.value)}
				 value={state}
			>
				<option value="00">- Selecciona una criptomoneta -</option>
				{
					opciones.map(opcion => (
						<option key={opcion.id} value={opcion.id}>{opcion.name}</option>
					))
				}
			</select>
		</Fragment>
	);

	// Retornar state, interfaz y funcion que modifica el state

	return[state, SelectCripto, actualizarState];
}

export default useCriptomoneda;