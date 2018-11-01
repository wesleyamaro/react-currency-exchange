import React, { Component } from 'react';
import Header from '../../components/Header/';
import Footer from '../../components/Footer/';
import CurrencyExchange from '../CurrencyExchange/';
import './index.sass';

class Home extends Component {
	render() {
		return (
			<div>
				<Header />

				<main>
					<div className="wrapper">
						<CurrencyExchange />
					</div>
				</main>

				<Footer />
			</div>
		);
	}
}

export default Home;
