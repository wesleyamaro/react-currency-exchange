import React, { Component } from 'react';
import Header from '../../components/Header/'
import Footer from '../../components/Footer/'
import './index.sass';

class Home extends Component {
	render() {
		return (
			<div>
				<Header />

				<main>
					<p>body</p>
				</main>

				<Footer />
			</div>
		);
	}
}

export default Home;
