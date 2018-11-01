export function currency(_number, _locale = 'en-US', _format = 'USD') {
	const formatter = new Intl.NumberFormat(_locale, {
		style: 'currency',
		currency: _format,
		minimumFractionDigits: 2
	});

	return formatter.format(_number);
}
