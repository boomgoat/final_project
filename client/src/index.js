import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import Signup from './Components/signup';
import newUser from './Components/newUser';
import Login from './Components/login';
import uProfile from './Components/profile';
import feed from './Components/feed';
import { BrowserRouter, Route } from 'react-router-dom';


import { Provider } from 'react-redux';
import store from './Components/store';

ReactDOM.render(
	
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Route exact path='/' component={App} />
				<Route path='/signup' component={Signup} />
				<Route path='/newUser' component={newUser} />
				<Route path='/login' component={Login} />
				<Route path='/profile' component={uProfile} />
				<Route path='/feed' component={feed} />
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'));

