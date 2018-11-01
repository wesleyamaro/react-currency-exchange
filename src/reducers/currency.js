import { NEW_CURRENCY, UPDATE_CURRENCY } from '../actions/currencyExchange';

const initialState = {
	exchange: 0,
	timestamp: null,
	usd: 0
};

export default function (state = initialState, action = {}) {
	switch(action.type) {
	case NEW_CURRENCY:
		return {
			...state,
			exchange: action.payload.exchange,
			timestamp: action.payload.timestamp,
			usd: action.payload.usd
		};
	case UPDATE_CURRENCY:
		return {
			...state,
			exchange: state.usd * action.payload
		};
	default:
		return state;
	}
}
