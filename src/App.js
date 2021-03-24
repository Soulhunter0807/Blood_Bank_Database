import React , { Component } from 'react';
import { Route } from 'react-router-dom';

// Firebase
import { auth } from './Firebase/utils';

// SCSS
import './SCSS/default.scss';

// Components
import Header from './Components/header.js';

// Page
import HomePage from './Pages/Homepage/homepage'
import Login from './Pages/Login'
import Search from './Pages/Search'

const initialState = {
  currentUser: null
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(userAuth => {
      if (!userAuth) return;

      this.setState({
        currentUser: userAuth
      })
    })
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    
    return (
      <div className = "App">
        <Header/>

      <div className = "main">
        <Route exact path = "/" component = {HomePage}/>
        <Route exact path = "/Login" component = {Login}/>
        <Route exact path = "/Search" component = {Search}/>
      </div>

    </div>    
    );
  }

}

export default App;
