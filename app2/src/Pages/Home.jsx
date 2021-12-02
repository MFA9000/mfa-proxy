import React, { useEffect, useState } from "react";
import { Link, Redirect } from "wouter";

import Header from "../Components/Header";

import { Container, Row, Col, Card } from "react-bootstrap";
import { useOktaAuth } from "@okta/okta-react";

const Home = () => {
  const { authState, oktaAuth } = useOktaAuth();

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!authState?.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      oktaAuth.getUser().then((info) => {
        setUserInfo(info);
        console.log(userInfo);
      });
    }
  }, [userInfo]);

  return authState?.isAuthenticated ? (
    <Redirect to="/Profile" />
  ) : (
    <Container>
      <Header authState={authState} oktaAuth={oktaAuth}></Header>

      <Row>
        <Col sm={12} className="text-center">
          <h3>React routing Demo</h3>

          <h5>
            A <a href="https://reactjs.org/">React</a> Demo using{" "}
            <a href="https://github.com/molefrog/wouter">Wouter</a> Secured by{" "}
            <a href="https://www.okta.com/">Okta</a>
          </h5>

          <p>
            A tutorial written by{" "}
            <a href="https://profile.fishbowlllc.com">Nik Fisher</a>
          </p>
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
