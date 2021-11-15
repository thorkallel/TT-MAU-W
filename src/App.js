import React, { Fragment } from 'react';

import Crypto from './components/Crypto';

//Context API
import CriptoState from './context/cripto/criptoState';
import CotizacionState from './context/cotizacion/cotizacionState';

// Styles
import { Gstyles, HeaderStyles, FooterStyles } from './styles/gstyles';

function App() {

  return (
    <Fragment>

      {/* // General Styles */}
      <Gstyles />

      {/* // Header Styles */}
			<HeaderStyles />

      {/* // Footer Styles */}
			<FooterStyles />

      <CriptoState>
        <CotizacionState>
          <Crypto />
        </CotizacionState>
      </CriptoState>
    </Fragment>
  );
}

export default App;
