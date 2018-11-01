import { NEW_CURRENCY } from '../actions/currencyExchange';

const initialState = {
	dolar: 0
};

export default function (state = initialState, action = {}) {
	switch(action.type) {
	case NEW_CURRENCY:
		return {
			...state,
			dolar: action.payload
		};
	default:
		return state;
	}
}
