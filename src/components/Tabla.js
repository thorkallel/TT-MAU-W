import React, { useEffect, useContext } from 'react';

// Librerias
import NumberFormat from 'react-number-format';
import { gsap, Power3 } from 'gsap';

// Context
import criptoContext from '../context/cripto/criptoContext';

const Tabla = () => {

	// Importar Context state de cripto
	const CriptoContext = useContext(criptoContext);
	const {
			datacripto
	} = CriptoContext;

	useEffect(() => {

		// GSAP
		gsap.fromTo(
			".cotizados",
			{
				x: -50,
				opacity: 0
			},
			{
				x: 0,
				opacity: 1,
				ease: Power3.easeIn,
				duration: 1
			}
		);

	}, [datacripto])

	if(Object.keys(datacripto).length === 0) return null;

	return (
		<div className="content--cotizados">
			<h3>5 Criptomonedas más cotizadas</h3>
			<ul>
				{
					datacripto.map((opcion, keyindex) => (
						keyindex <= 4 ? <li className="cotizados" key={opcion.id}><p>{opcion.name}</p><span><NumberFormat value={opcion.price_usd} prefix={'$'} displayType={'text'} thousandSeparator={true}/></span></li> : null
					))
				}
			</ul>
		</div>

	 );
}

export default Tabla;