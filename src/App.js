import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Pages import
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Skills from './pages/Skills';

const App = () => {
	return (
		<>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/competences" component={Skills} />
					<Route path="/contact" component={Contact} />
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		</>
	);
};

export default App;