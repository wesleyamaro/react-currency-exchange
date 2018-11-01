export const NEW_CURRENCY = 'NEW_CURRENCY';
export const UPDATE_EXCHANGE = 'UPDATE_EXCHANGE';

export function convertCurrency(euroCurrency, timestamp) {
	const calcTime = timestamp ? (Date.now() - timestamp)/1000 : null;
	const tenMinutes = 60*10;

	return async dispatch => {
		if(calcTime === null || calcTime > tenMinutes) {
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
		} else {
			dispatch({
				type: UPDATE_EXCHANGE,
				payload: euroCurrency
			});
		}
	};
}
