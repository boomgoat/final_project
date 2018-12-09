// Generic

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import How from './Components/How';
import {BrowserRouter, Route} from 'react-router-dom';
import {userLoggedIn} from './redux/users/actions';
import {adminLoggedIn} from './redux/admin/actions';
import {brandLoggedIn} from './redux/brands/actions';
import decode from 'jwt-decode';
import {Provider} from 'react-redux';
import store from './redux';

// Brand Imports

import BrandProfile from './Components/Routes/Brands/profile';
import BrandInfo from './Components/Routes/Brands/BrandInfo';
import BrandLog from './Components/Routes/Brands/BrandLogin';
import AdDashboard from './Components/Routes/Brands/AdDashboard';
import BrandJob from './Components/Routes/Brands/JobCreation';
import NewBrand from './Components/Routes/Admin/NewBrand';

// User Imports

import Signup from './Components/Routes/User/signup';
import newUser from './Components/Routes/User/newUser';
import UserSettings from './Components/Routes/User/UserSettings';
import Login from './Components/Routes/User/login';
import uProfile from './Components/Routes/User/profile';
import feed from './Components/Routes/User/feed';
import JobCreation from './Components/Routes/User/JobCreation';
import NewServ from './Components/Routes/User/NewService';
import JobDashboard from './Components/Routes/User/JobDashboard';
import ActiveJobs from './Components/Routes/User/ActiveJobs';
import CompJobs from './Components/Routes/User/CompJobs';
import ServiceDashboard from './Components/Routes/User/ServiceDashboard';
import JobDesc from './Components/Routes/User/JobDesc';
import BidDash from './Components/Routes/User/BidDash';

// Admin Imports

import JobRev from './Components/Routes/Admin/JobReview';
import SerRev from './Components/Routes/Admin/ServiceReview';
import MBrand from './Components/Routes/Admin/ManageBrand';
import MUser from './Components/Routes/Admin/ManageUser';
import Admin from './Components/Routes/Admin/Admin';
import FPStatus from './Components/Routes/Admin/PointStatus';
import AdminDashboard from './Components/Routes/Admin/AdminDashboard';
import AdminMessenger from './Components/Routes/Admin/AdminMessenger';
import AdminLog from './Components/Routes/Admin/AdminLogin';


// End Imports


if (localStorage.FavorBankJWT) {
  const payload = decode(localStorage.FavorBankJWT);
  const loginUser = {
    token: localStorage.FavorBankJWT, id: payload.id, email: payload.email, firstName: payload.firstName,
    lastName: payload.lastName, availability: payload.availability, about: payload.about, skills: payload.skills, 
    rating: payload.rating, rank: payload.rank, reviews: payload.reviews, favorPoints: payload.favorPoints
  };
  store.dispatch(userLoggedIn(loginUser))
}

if (localStorage.FavorBankADMIN) {
  const payload = decode(localStorage.FavorBankADMIN);
  const loginAdmin = {
    token: localStorage.FavorBankADMIN, email: payload.email, firstName: payload.firstName,
    lastName: payload.lastName
  };
  store.dispatch(adminLoggedIn(loginAdmin))
}

if (localStorage.FavorBankBRAND) {
  const payload = decode(localStorage.FavorBankBRAND);
  const loginBrand = {
    token: localStorage.FavorBankBRAND, email: payload.email, brandName: payload.brandName
  };
  store.dispatch(brandLoggedIn(loginBrand))
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path='/' component={App}/>
        <Route exact path='/howItWorks' component={How}/>


        <Route path='/signup' component={Signup}/>
        <Route path='/newUser' component={newUser}/>
        <Route path='/settings' component={UserSettings}/>
        <Route path='/login' component={Login}/>
        <Route path='/profile' component={uProfile}/>

        <Route path='/newJob' component={JobCreation}/>

        <Route path='/myJobs' component={JobDashboard}/>

        <Route path='/activeJobs/:viewType' component={ActiveJobs}/>
        <Route path='/completedJobs' component={CompJobs}/>
        <Route path='/jobDesc/:_id' component={JobDesc}/>

        <Route path='/myBids' component={BidDash}/>
        <Route path='/feed' component={feed}/>

        <Route path='/myServices' component={ServiceDashboard}/>
        <Route path='/newService' component={NewServ}/>


        <Route path='/brandLogin' component={BrandLog}/>
        <Route path='/brand' component={BrandProfile}/>
        <Route path='/adverts' component={AdDashboard}/>
        <Route path='/myBrand' component={BrandInfo}/>
        <Route path='/newBrandJob' component={BrandJob}/>


        <Route path='/jobRev' component={JobRev}/>
        <Route path='/createBrand' component={NewBrand}/>
        <Route path='/serRev' component={SerRev}/>
        <Route path='/admin' component={Admin}/>
        <Route path='/manageBrands' component={MBrand}/>
        <Route path='/manageUsers' component={MUser}/>
        <Route path='/pointStatus' component={FPStatus}/>
        <Route path='/adm/dashboard' component={AdminDashboard}/>
        <Route path='/adm/messenger' component={AdminMessenger}/>
        <Route path='/adminLogin' component={AdminLog}/>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

