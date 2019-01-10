import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase/app';
import 'firebase/auth';

import connection from '../helpers/data/connection';
import authRequests from '../helpers/data/authRequests';

import Auth from '../components/Auth/Auth';
import Mavbar from '../components/Mavbar/Mavbar';
import './App.scss';

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    connection();
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
        });
      } else {
        this.setState({
          authed: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  isAuthenticated = () => {
    this.setState({ authed: true });
  }

  render() {
    const { authed } = this.state;
    const logoutClicky = () => {
      authRequests.logoutUser();
      this.setState({ authed: false });
    };

    if (!authed) {
      return (
        <div className="App">
          <Mavbar isAuthed={authed} logoutClicky={logoutClicky} />
          <Auth isAuthenticated={this.isAuthenticated} />
        </div>
      );
    }

    return (
      <div className="App">
        <Mavbar isAuthed={authed} logoutClicky={logoutClicky} />
        <h1>You Are Authenticated.</h1>
      </div>
    );
  }
}

export default App;
