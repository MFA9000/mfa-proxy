import React from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { Redirect } from "wouter";

const Header = ({ isLoggedin }) => {
  const button = isLoggedin ? (
    <Button
      variant="secondary"
      onClick={() => {
        window.location.replace(
          "http://localhost:3001/logout?CB_URL=http://localhost:3003/"
        );
      }}
    >
      Logout
    </Button>
  ) : (
    <Button
      variant="secondary"
      onClick={() => {
        window.location.replace(
          `http://localhost:3001?CB_URL=${window.location.href}`
        );
      }}
    >
      Login
    </Button>
  );

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">App 1</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Form inline>{button}</Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
