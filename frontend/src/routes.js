import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './pages/MainPage';

export default function Routes() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={MainPage} />
			</Switch>
		</Router>
	);
}
