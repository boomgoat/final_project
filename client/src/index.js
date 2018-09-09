import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import Signup from './Components/signup';
import Login from './Components/login';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route exact path='/' component={App} />
			<Route path='/signup' component={Signup} />
			<Route path='/login' component={Login} /> 
		</div>
	</BrowserRouter>,
	document.getElementById('root'));

