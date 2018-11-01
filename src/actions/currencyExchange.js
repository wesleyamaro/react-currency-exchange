export const NEW_CURRENCY = 'NEW_CURRENCY';
export const UPDATE_CURRENCY = 'UPDATE_CURRENCY';

export function convertCurrency(euroCurrency) {
	return async dispatch => {
		return await fetch('http://data.fixer.io/api/latest?access_key=d502a699732495d2f7abc7cc17aff369')
			.then(res => res.json())
			.then(data => {
				dispatch({
					type: NEW_CURRENCY,
					payload: {
						usd: data.rates.USD,
						timestamp: Date.now(),
						exchange: euroCurrency * data.rates.USD
					}
				});
			})
			.catch(err => { throw err;});
	};
}

export function updateCurrency(euroCurrency) {
	return dispatch => {
		dispatch({
			type: UPDATE_CURRENCY,
			payload: euroCurrency
		});
	};
}
