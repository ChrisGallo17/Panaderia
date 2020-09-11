import React from 'react'
import Pastries from '../Pastries'
import Home from '../Home'
import logo from '../images/logo.png'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { BrowserRouter as HashRouter, Switch, Route } from 'react-router-dom'

const navheader = {
    zIndex: 1
}

const logoStyle = {
    marginRight: 15
}


export default function NavBar() {
    return (
      <HashRouter basename='/'>
        <Navbar style={navheader} bg="dark" variant="dark">
          <Navbar.Brand href="/">
                <img src={logo} alt="Logo" width="30" height="30" style={logoStyle}/>
                Panaderia
            </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/pastries">Pastries</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>

        <Switch>
          <Route path="/pastries">
            <Pastries />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </HashRouter>
    );
}