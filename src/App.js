import './styling/App.css';
import React from 'react';
import AccountsContainer from './containers/AccountsContainer';

import * as ReactBootStrap from 'react-bootstrap';


class App extends React.Component {


  render(){
    return(
      <div className="Investment App">
        <ReactBootStrap.Navbar variant="dark" bg="primary" expand="sm">
        <ReactBootStrap.Navbar.Brand href="#home">Investment Tracker</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
        <ReactBootStrap.Nav className="navbar">
        <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="/accounts">Accounts</ReactBootStrap.Nav.Link>
        <ReactBootStrap.NavDropdown title="More options" id="basic-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="/account/new">Add Account</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Coming soon...</ReactBootStrap.NavDropdown.Item>
        {/*<ReactBootStrap.NavDropdown.Item href="#action/3.3">Some more functionality</ReactBootStrap.NavDropdown.Item>*/}
        {/*<ReactBootStrap.NavDropdown.Divider />*/}
        {/* <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>*/}
        </ReactBootStrap.NavDropdown>
        </ReactBootStrap.Nav>
        {/*<ReactBootStrap.Form inline>
        <ReactBootStrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <ReactBootStrap.Button variant="outline-success">Search</ReactBootStrap.Button>
        </ReactBootStrap.Form>*/}
        </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
        <header className="Investment Tracker"></header>
        <AccountsContainer />
      </div>
    )
  }
}

//way to access values/props in our store(so we the developer can see what is in our store)
///const mapStateToProps = (state) => {
  ///return{
///
  ///}
///}

export default App;
