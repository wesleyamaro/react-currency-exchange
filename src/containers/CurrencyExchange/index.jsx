import React from 'react';
import './index.sass';

const CurrencyExchange = () => {
	return (
		<section id="currency-exchange">
			<form>
				<input type="text" className="col-4 grid-margin" placeholder="USD" />
				<input type="text" className="col-4 grid-margin" placeholder="EU" />

				<div id="actions">
					<button>Convert</button>
				</div>
			</form>
		</section>
	);
}

export default CurrencyExchange;
