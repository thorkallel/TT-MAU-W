import {
		CARGAR_CRIPTO,
		GUARDAR_CRIPTO,
} from '../../types/'

export default (state, action) => {

	switch(action.type) {

		case 	CARGAR_CRIPTO:
			return {
				...state,
				datacripto: action.payload,
				loadstate: false
			}

		case 	GUARDAR_CRIPTO:
			return {
				...state,
				criptomoneda: action.payload,
			}

		default:
			return state;
	}

}