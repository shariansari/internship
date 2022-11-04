import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom"

function Header() {
  return (
    <div>
      <Navbar bg="Primary" expand="lg" style={{backgroundColor:" rgb(114 209 170 / 55%)"}}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" style={{fontSize:"20px",textDecoration:"none",marginLeft:"20px",color:"white"}}>Top Performer Of The Day</NavLink>
              <NavLink to="Week" style={{fontSize:"20px",textDecoration:"none",marginLeft:"20px",color:"white"}}>Top Performer of The Week</NavLink>
              <NavLink to="/Month" style={{fontSize:"20px",textDecoration:"none",marginLeft:"20px",color:"White"}}>Top Performer of The Month</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
