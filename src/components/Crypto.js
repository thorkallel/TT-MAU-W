import React, { Fragment, useState, useEffect, useContext } from 'react';

//Componentes
import Formulario from './Formulario';
import Cotizacion from './Cotizacion';
import Spinner from './Spinner';
import Coin from '../components/Coin';

//Context
import cotizacionContext from '../context/cotizacion/cotizacionContext';
import criptoContext from '../context/cripto/criptoContext';

// Styles
import { Content } from '../styles/gstyles';
import Tabla from './Tabla';

function Crypto() {

  // Importar Context state de cotizacion
	const CotizacionContext  = useContext(cotizacionContext);
	const { fGetDataCotizacion } = CotizacionContext;

	// Importar Context state de cripto
	const CriptoContext = useContext(criptoContext);
	const { criptomoneda } = CriptoContext;

  // State de moneda
  const [cargando, guardarCuargando] = useState(false);

  useEffect(() => {

    // evitamos la ejecución la primera vez.
    if(criptomoneda === '') return;

		fGetDataCotizacion(criptomoneda);

		guardarCuargando(true);

		// ocultar el spinner
		setTimeout(() => {
		// cambiar el estado de cargando

		guardarCuargando(false);

		// guardar cotizacion
		}, 3000);

  }, [ criptomoneda ]);

  // Mostrar  spinner o resultado
  const componente = (cargando) ? <Spinner /> : <Cotizacion />

  return (
    <Fragment>

      {/* // General Styles */}
      <Content />

      <header>
        <div className="logo">
          <div className="logo--name">
            <h1>Crypto</h1><span><b>V</b>Alpha</span>
          </div>
          <h2>Prueba técnica / Million and up </h2>
        </div>

        <Coin />
      </header>

      <main>
        <div className="content">
          <Tabla />
          <Formulario/>

          { componente }
        </div>
      </main>

      <footer>
        <p><b>Front End</b></p>
        <p>Julián Andrés Giraldo Izquierdo</p>
        <p><b>thorkallel@hotmail.com</b></p>
      </footer>

    </Fragment>
  );
}

export default Crypto;
