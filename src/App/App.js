import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';

import connection from '../helpers/data/connection';
import authRequests from '../helpers/data/authRequests';

import Auth from '../components/pages/Auth/Auth';
import Home from '../components/pages/Home/Home';
import EditFriend from '../components/pages/EditFriend/EditFriend';
import EditHoliday from '../components/pages/EditHoliday/EditHoliday';
import Friends from '../components/pages/Friends/Friends';
import HolidayDetail from '../components/pages/HolidayDetail/HolidayDetail';
import HolidayFriends from '../components/pages/HolidayFriends/HolidayFriends';
import Holidays from '../components/pages/Holidays/Holidays';
import NewFriend from '../components/pages/NewFriend/NewFriend';
import NewHoliday from '../components/pages/NewHoliday/NewHoliday';
import Mavbar from '../components/Mavbar/Mavbar';

import './App.scss';

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

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

  render() {
    const { authed } = this.state;
    const logoutClicky = () => {
      authRequests.logoutUser();
      this.setState({ authed: false });
    };

    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Mavbar isAuthed={authed} logoutClicky={logoutClicky} />
              <div className="row">
                <Switch>
                  <PrivateRoute exact path='/' component={Home} authed={this.state.authed} />
                  <PrivateRoute path='/home' component={Home} authed={this.state.authed} />
                  <PrivateRoute exact path='/friends' component={Friends} authed={this.state.authed} />
                  <PrivateRoute path='/friends/:id/edit' component={EditFriend} authed={this.state.authed}/>
                  <PrivateRoute path='/friends/new' component={NewFriend} authed={this.state.authed} />
                  <PrivateRoute exact path='/holidays' component={Holidays} authed={this.state.authed} />
                  <PrivateRoute exact path='/holidays/new' component={NewHoliday} authed={this.state.authed} />
                  <PrivateRoute exact path='/holidays/:id' component={HolidayDetail} authed={this.state.authed} />
                  <PrivateRoute exact path='/holidays/:id/edit' component={EditHoliday} authed={this.state.authed} />
                  <PrivateRoute exact path='/holidays/:id/friends' component={HolidayFriends} authed={this.state.authed} />
                  <PublicRoute path='/auth' component={Auth} authed={this.state.authed} />
                </Switch>
              </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
