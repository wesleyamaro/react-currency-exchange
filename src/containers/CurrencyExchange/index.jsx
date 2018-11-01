import React from 'react';
import PropTypes from 'prop-types';
import { convertCurrency, updateCurrency } from '../../actions/currencyExchange';
import { currency} from '../../helpers/currency';
import { connect } from 'react-redux';
import CurrencyFormat from 'react-currency-format';
import './index.sass';

class CurrencyExchange extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			txtEuro: '',
			buttonDisabled: false
		};

		this.onHandleChange = this.onHandleChange.bind(this);
		this.onSubmitConvertCurrency = this.onSubmitConvertCurrency.bind(this);
	}

	onHandleChange(obj) {
		this.setState({
			txtEuro: obj.value
		});
	}

	onSubmitConvertCurrency(e) {
		e.preventDefault();

		const { convertCurrency, updateCurrency, lastSync } = this.props;
		const { txtEuro } = this.state;

		const calcTime = lastSync ? (Date.now() - lastSync)/1000 : null;
		const tenMinutes = 60*10;

		if(calcTime === null || calcTime > tenMinutes) {
			this.setState({ buttonDisabled: true });

			convertCurrency(txtEuro, lastSync)
				.then(() => {
					this.setState({ buttonDisabled: false });
				})
				.catch(() => {
					this.setState({ buttonDisabled: false });
					alert('Something went wrong! Try again!');
				});
		} else {
			updateCurrency(txtEuro);
		}
	}

	render() {
		const { txtDolar } = this.props;
		const { txtEuro, buttonDisabled } = this.state;

		return (
			<section id="currency-exchange">
				<form onSubmit={this.onSubmitConvertCurrency}>
					<div className="row col-6 grid-margin">
						<label>Euro (€):</label>

						<CurrencyFormat
							placeholder="EUR"
							value={txtEuro !== '' ? txtEuro : ''}
							name="txtEuro"
							displayType={'input'}
							thousandSeparator={true}
							onValueChange={this.onHandleChange}
							prefix={'€'}
							required
						/>
					</div>

					<div className="row col-6 grid-margin">
						<label>Dólar ($):</label>
						<input
							type="text"
							placeholder="USD"
							readOnly
							value={txtDolar === 0 ? '' : currency(parseFloat(txtDolar))}
							name="euText"
						/>
					</div>

					<div id="actions">
						<button disabled={buttonDisabled}>
							{buttonDisabled ? 'Loading...' : 'Convert'}
						</button>
					</div>
				</form>
			</section>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		txtDolar: state.currencyReducer.exchange,
		lastSync: state.currencyReducer.timestamp
	};
};

CurrencyExchange.propTypes = {
	txtDolar: PropTypes.number,
	convertCurrency: PropTypes.func,
	lastSync: PropTypes.number,
	updateCurrency: PropTypes.func
};

export default connect(mapStateToProps, { convertCurrency, updateCurrency })(CurrencyExchange);
