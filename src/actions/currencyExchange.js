export const NEW_CURRENCY = 'NEW_CURRENCY';

export function convertCurrency(euroCurrency) {
	return async dispatch => {
		return await fetch('http://data.fixer.io/api/latest?access_key=d502a699732495d2f7abc7cc17aff369')
			.then(res => res.json())
			.then(data => {
				dispatch({
					type: NEW_CURRENCY,
					payload: euroCurrency * data.rates.USD
				});

				return data.success;
			})
			.catch(err => { throw err;});
	};
}
