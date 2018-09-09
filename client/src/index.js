import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import Signup from './Components/signup';
import newUser from './Components/newUser';
import Login from './Components/login';
import uProfile from './Components/profile';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route exact path='/' component={App} />
			<Route path='/signup' component={Signup} />
			<Route path='/newUser' component={newUser} />
			<Route path='/login' component={Login} />
			<Route path='/profile' component={uProfile} />
		</div>
		
	</BrowserRouter>,
	document.getElementById('root'));

