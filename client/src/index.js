import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import How from './Components/How';
import Signup from './Components/signup';
import newUser from './Components/newUser';
import UserSettings from './Components/UserSettings';
import Login from './Components/login';
import uProfile from './Components/profile';
import feed from './Components/feed';
import JobCreation from './Components/JobCreation';
import JobDashboard from './Components/JobDashboard';
import JbDesc from './Components/JobDesc';
import Admin from './Components/Admin';
import AdminDashboard from './Components/AdminDashboard';
import AdminLog from './Components/AdminLogin';
import { BrowserRouter, Route } from 'react-router-dom';
import {userLoggedIn} from './redux/users/actions';
import {adminLoggedIn} from './redux/admin/actions';
import decode from 'jwt-decode';
import { Provider } from 'react-redux';
import store from './redux';
import JobDesc from './Components/JobDesc';

if(localStorage.FavorBankJWT){
	const payload = decode(localStorage.FavorBankJWT);
	const loginUser = {token: localStorage.FavorBankJWT, email: payload.email, firstName: payload.firstName, 
		lastName: payload.lastName, about: payload.about, skills: payload.skills};
	store.dispatch(userLoggedIn(loginUser))
}

if(localStorage.FavorBankADMIN){
	const payload = decode(localStorage.FavorBankADMIN);
	const loginAdmin = {token: localStorage.FavorBankADMIN, email: payload.email, firstName: payload.firstName, 
		lastName: payload.lastName};
	store.dispatch(adminLoggedIn(loginAdmin))
}

ReactDOM.render(
	
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Route exact path='/' component={App} />
				<Route exact path='/howItWorks' component={How} />
				<Route path='/signup' component={Signup} />
				<Route path='/newUser' component={newUser} />
				<Route path='/settings' component={UserSettings} />
				<Route path='/login' component={Login} />
				<Route path='/profile' component={uProfile} />
				<Route path='/feed' component={feed} />
				<Route path='/newJob' component={JobCreation} />
				<Route path='/myJobs' component={JobDashboard} />
				<Route path='/jobDesc' component={JobDesc} />
				<Route path='/admin' component={Admin} />
				<Route path='/adm/dashboard' component={AdminDashboard} />
				<Route path='/adminLogin' component={AdminLog} />
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'));

