import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';
import Landing from './components/landing/home';

//import './assets/css/flaticon.css';

//import { Provider } from 'react-redux';
//import store from './store';

//import PrivateRoute from './components/common/PrivateRoute';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Search from "./components/landing/search";
//import Footer from './components/layout/Footer';
//import Landing from './components/layout/Landing';
//import Register from './components/auth/Register';
//import Login from './components/auth/Login';
//import Dashboard from './components/dashboard/Dashboard';
//import CreateProfile from './components/create-profile/CreateProfile';
//import EditProfile from './components/edit-profile/EditProfile';
//import AddExperience from './components/add-credentials/AddExperience';
//import AddEducation from './components/add-credentials/AddEducation';
//import Profiles from './components/profiles/Profiles';
//import Profile from './components/profile/Profile';
//import Posts from './components/posts/Posts';
//import Post from './components/post/Post';
//import NotFound from './components/not-found/NotFound';

//import './App.css';

// Check for token
//if (localStorage.jwtToken) {
  // Set auth token header auth
  //setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  //const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  //store.dispatch(setCurrentUser(decoded));


  // Check for expired token
  //const currentTime = Date.now() / 1000;
  //if (decoded.exp < currentTime) {
    // Logout user
    //store.dispatch(logoutUser());
    // Clear current Profile
    //store.dispatch(clearCurrentProfile());
    // Redirect to login
    //window.location.href = '/login';
  //}
//}

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
          <Navbar/>
          <Route exact path="/" component={ Search } />
          <Route exact path="/" component={ Landing } />
          <Footer/>
      </div>
  </Router>
    );
  }
}

export default App;
