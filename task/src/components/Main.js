import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './styles/Main.css';

import Header from './Header';
import Login from './Login';
import Profile from './Profile';
import Contacts from './Contacts';
import Footer from './Footer';
import ApiInfo from './ApiInfo';

export default class Main extends Component {
  componentDidMount() {
    const userKey = localStorage.getItem("userKey");
    this.props.setUserKey(userKey);
    this.props.loadApiInfo();
    if(userKey) {
      this.props.loadProfile();
    }
  }

  pageMain () {
    const {apiInfo} = this.props;
    return (
      <ApiInfo apiInfo={apiInfo}/>
    )
  }

  pageProfile () {
    const {profile} = this.props;
    return (
      <Profile profile={profile}/>
    )
  }

  pageContacts () {
    const { loadContacts, isContactsLoaded, isContactsLoading, contactsList, isError, requestError } = this.props;
    if (!isContactsLoaded && !isContactsLoading) {
      loadContacts();
    }
    if (isContactsLoaded) {
      return (
        <Contacts contactsList={contactsList}/>
      );
    } else {
      return isError ? requestError : "Contacts are loading...";
    }
  }
  execLogoutRoute() {
    const {execLogout} = this.props;
    execLogout();
    return (
      <Router>
      </Router>
    );
  }
  render () {
    const { redirect, dropRedirect, userKey, loginFacebook } = this.props;
    if (redirect) {
      dropRedirect();
      return (
        <Router>
          <Redirect to={redirect}/>
        </Router>
      );
    }
    if (!userKey) {
      return (
        <Router>
          <Header userKey={userKey} />
          <main>
            <Login loginFacebook={loginFacebook} />
          </main>
          <Footer />
        </Router>
      )
    }
    return (
      <Router>
        <Header userKey={userKey}/>
        <main>
          <Route exact path="/" render={() => this.pageMain()}/>
          <Route exact path="/profile" render={() => this.pageProfile()}/>
          <Route exact path="/contacts" render={() => this.pageContacts()}/>
          <Route exact path="/logout" render={() => this.execLogoutRoute()}/>
        </main>
        <Footer />
      </Router>
    );
  }

}
