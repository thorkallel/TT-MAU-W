import React, { useContext, useEffect } from 'react';

// Librerias
import NumberFormat from 'react-number-format';
import { gsap, Power3 } from 'gsap';

// Context
import cotizacionContext from '../context/cotizacion/cotizacionContext';

const Cotizacion = () => {

	 // Importar Context state de cotizacion
	 const CotizacionContext = useContext(cotizacionContext);
	 const { datacotizacion } = CotizacionContext;

	 useEffect(() => {

		// GSAP
		gsap.fromTo(
			".content--cotizacion",
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

	}, [datacotizacion])

	if(Object.keys(datacotizacion).length === 0) return null;

	return (
		<div className="content--cotizacion">
			<p>Nombre <span>{ datacotizacion.name }</span></p>
			<p>Símbolo: <span>{ datacotizacion.symbol }</span></p>
			<p>El precio es: <span>
					<NumberFormat value={datacotizacion.price_usd} prefix={'$'} displayType={'text'} thousandSeparator={true}/>
				</span>
			</p>
			<p>Variación últimas 24 horas: <span>
				<NumberFormat value={ datacotizacion.percent_change_24h } suffix={'%'} displayType={'text'} thousandSeparator={true}/>
				</span>
			</p>
			<p>Variación últimas 1 hora: <span>
				<NumberFormat value={ datacotizacion.percent_change_1h } suffix={'%'} displayType={'text'} thousandSeparator={true}/>
			</span></p>
			<p>Variación últimas 7 días:
				<span>
				<NumberFormat value={ datacotizacion.percent_change_7d } suffix={'%'} displayType={'text'} thousandSeparator={true}/>
			</span></p>
			<p>Volumen de 24h:
				<span>
					<NumberFormat value={ datacotizacion.volume24 } prefix={'$'} displayType={'text'} thousandSeparator={true}/>
				</span>
			</p>
			<p>Capitalización: <span>
					<NumberFormat value={ datacotizacion.market_cap_usd } prefix={'$'} displayType={'text'} thousandSeparator={true}/>
				</span>
			</p>
		</div>
	 );
}

export default Cotizacion;