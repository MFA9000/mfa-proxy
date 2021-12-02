import React, { useEffect, useState } from "react";
import { Link, Redirect } from "wouter";

import { Container, Row, Col, Card } from "react-bootstrap";
import { useCookies } from "react-cookie";

import Header from "../Components/Header";

const Home = () => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "auth_user_info",
    "auth_token",
  ]);
  const [isLoggedin, setLogin] = useState(false);
  useEffect(() => {
    if (!cookies["auth_user_info"] || !cookies["auth_token"]) return;
    console.log(cookies["auth_user_info"], cookies["auth_token"])
    setLogin(true);
  }, [cookies, setLogin]);

  return isLoggedin ? (
    <Redirect to="/Profile" />
  ) : (
    <Container>
      <Header isLoggedin={isLoggedin} />

      <Row>
        <Col sm={12} className="text-center">
          <h3>App1 Public Landing page</h3>
          <h5>Home page</h5>
        </Col>
      </Row>

      <br></br>

      <Row>
        <Col sm={12} className="text-center">
          <Card style={{ width: "21.5em", margin: "0 auto" }}>
            <Card.Header>Already have an Okta Account?</Card.Header>
            <Card.Body>
              <Link to="Profile">Login Here</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
