import React from "react"; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from "react-router-dom";
import './menu.css';

function Menu() {
    
 let id = localStorage.getItem('id');
  
  return (

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand ><NavLink to={"/"}>Logo</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Link className="menu" to={"/"}>Home</Link>
            <Link className="menu" to={"/about"}>About</Link>
            {
              id ? <Link className="menu" to={"/logout"}>Logout</Link>
              :  <Link className="menu" to={"/login"}>Login</Link>
            }
           
            <Link className="menu" to={"/users"}>Users</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;