import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { useOktaAuth } from "@okta/okta-react";

import Header from "../Components/Header";
import { useCookies } from "react-cookie";

const Profile = () => {
  const { authState, oktaAuth, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["auth", "CB_URL"]);

  useEffect(() => {
    async function authenticate() {
      if (!authState) return;

      if (!authState.isAuthenticated) {
        setUserInfo(null);
        return await oktaAuth.signInWithRedirect();
      }

      oktaAuth.getUser().then((info) => {
        console.log(info);
        setCookie("auth", info);
        window.location.replace(cookies["CB_URL"]);
        setUserInfo(info);
      });
    }
    authenticate();
  }, []);

  if (!authState?.isAuthenticated) {
    return (
      <Container>
        <p>Please wait while we sign you in</p>
      </Container>
    );
  } else {
    return (
      <Container>
        <Header authState={authState} oktaAuth={oktaAuth}></Header>
        <h4>Your profile page</h4>

        <p>Welcome to your profile page </p>
      </Container>
    );
  }
};

export default Profile;
