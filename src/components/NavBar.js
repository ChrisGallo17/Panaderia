import React from 'react'
import Pastries from '../Pastries'
import Home from '../Home'
import logo from '../images/logo.png'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'

const navheader = {
    zIndex: 1
}

const logoStyle = {
    marginRight: 15
}


export default function NavBar() {
    return (
      <Router>
        <Navbar style={navheader} bg="dark" variant="dark">
          <Link className="navbar-brand" to="/">
              <img
                src={logo}
                alt="Logo"
                width="30"
                height="30"
                style={logoStyle}
              />
              Panaderia
          </Link>
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/Pastries">
              Pastries
            </Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/Pastries">
            <Pastries />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
}