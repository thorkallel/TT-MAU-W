import React, { useEffect, useState, useContext } from 'react';

//Componentes
import Error from './Error';
import useCriptomoneda from '../hooks/useCriptomoneda';

// Context
import criptoContext from '../context/cripto/criptoContext';

const Formulario = () => {

	// Importar Context state de cripto
	const CriptoContext = useContext(criptoContext);
	const {
			datacripto,
			loadstate,

			fGetDatacripto,
			fSaveCripto
	} = CriptoContext;

	// state del listado de cripto
	const [ listacripto, guardarcripto ] = useState([]);
	const [ error, guardarError ] = useState(false);

	// utilizar useCriptomoneda
	const [criptomoneda, SelectCripto] = useCriptomoneda('Elige tu moneda','' , listacripto);

	// Ejecutar a la API
	useEffect(() => {

		if(loadstate) {
			fGetDatacripto();
		}

		guardarcripto(datacripto);

	}, [loadstate])


 	// cuando el usuario hace submit
	 const cotizarMoneda = e => {

		 e.preventDefault();

		 if( criptomoneda === '') {
			guardarError(true);
			return;
		}

		 // Validar que se haya seleccionado una criptomoneda
		 guardarError(false);

		 // pasar los datos al componente principal
		 fSaveCripto(criptomoneda);
	 }

	return (
		<form
			onSubmit={cotizarMoneda}
			className="content--form"
		>

			{ error ? <Error mensaje="Por favor seleccione una criptomoneda" /> : null }

			<SelectCripto />

			<input
				type="submit"
				value="Calcular"
			></input>
		</form>
	 );
}

export default Formulario;