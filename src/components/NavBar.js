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
          <Link to="/">
            <Navbar.Brand>
              <img
                src={logo}
                alt="Logo"
                width="30"
                height="30"
                style={logoStyle}
              />
              Panaderia
            </Navbar.Brand>
          </Link>
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/Pastries">
              Pastries
            </Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
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