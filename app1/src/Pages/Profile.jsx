import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";

import Header from "../Components/Header";
import { useCookies } from "react-cookie";

const Profile = () => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "auth_user_info",
    "auth_token",
  ]);

  const [isLoggedin, setLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [token, setToken] = useState({});

  useEffect(() => {
    if (!cookies["auth_user_info"] || !cookies["auth_token"]) return;
    setUserInfo(cookies["auth_user_info"]);
    setToken(cookies["auth_token"]);
    setLogin(true);
  }, []);

  if (!isLoggedin) {
    return (
      <Container>
        <p>Please wait while we sign you in</p>
        or click here to go home
        <br />
        <Button
          variant="secondary"
          onClick={() => {
            window.location.replace(`/`);
          }}
        >
          home
        </Button>
      </Container>
    );
  } else {
    return (
      <Container>
        <Header isLoggedin={isLoggedin}></Header>
        <h4>Private Dashvoard</h4>
        <p>Welcome to your profile page </p>

        <p> {JSON.stringify({ userInfo, token }, null, 2)} </p>
      </Container>
    );
  }
};

export default Profile;
