import {
		REALIZAR_COTIZACION
} from '../../types/'

export default (state, action) => {

	switch(action.type) {

		case 	REALIZAR_COTIZACION:
			return {
				...state,
				datacotizacion: action.payload[0]
			}

		default:
			return state;
	}

}