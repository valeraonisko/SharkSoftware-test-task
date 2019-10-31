import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import './styles/Header.css';

export default class Header extends Component {

  render () {
    const userIconLogout = (<Nav className="ml-auto float-right">
        <NavItem>
          <NavLink exact to="/logout" className="nav-link" activeClassName="active">
          <img className="user" alt="user-foto" src="/userIcon.png"/>
        </NavLink>
        </NavItem>
      </Nav>)
    const { userKey } = this.props;
    const menu = userKey ?
      ( <>
        <NavItem>
          <NavLink exact to="/" className="nav-link text-info" activeClassName="active">Главная</NavLink>
        </NavItem>
        <NavItem>
        <NavLink exact to="/profile" className="nav-link text-info" activeClassName="active">Профайл</NavLink>
        </NavItem>
        <NavItem>
          <NavLink exact to="/contacts" className="nav-link text-info" activeClassName="active">Контакты</NavLink>
        </NavItem>
        {userIconLogout}
        </>) : null;
    return (

        <header className="main-header">
          <Navbar expand="md" color="light" light>
            <Nav navbar className="mr-auto">
              <NavbarBrand href="/" className="text-muted">
                <img className="logo" alt="logo" src="/Logo.png"/><br/>
                <div className="brand">SharkSoftware-test-task</div><br/>

              </NavbarBrand>
              {menu}
            </Nav>
          </Navbar>
        </header>

    );
  }

}
