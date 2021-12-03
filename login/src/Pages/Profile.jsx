import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { useOktaAuth } from "@okta/okta-react";

import Header from "../Components/Header";
import { useCookies } from "react-cookie";

const cookieOptions = {
  domain: "localhost",
  path: "/",
  secure: false,
};
const Profile = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies([
    "auth_user_info",
    "auth_token",
    "CB_URL",
  ]);
  const CB_URL = cookies["CB_URL"];

  useEffect(() => {
    async function authenticate() {
      if (!authState) return;
      if (!authState.isAuthenticated) {
        removeCookie("auth_user_info");
        removeCookie("auth_token");
        removeCookie("CB_URL");
        setUserInfo(null);
        return await oktaAuth.signInWithRedirect();
      }
      const info = await oktaAuth.getUser();
      const token = await oktaAuth.token.getWithoutPrompt();

      console.log({ info, token });
      setCookie("auth_user_info", JSON.stringify(info), cookieOptions);
      setCookie("auth_token", JSON.stringify(token), cookieOptions);

      // setCookie("auth", JSON.stringify({ token, info }));
      if (CB_URL && CB_URL !== "false") window.location.replace(CB_URL);
      setUserInfo(info);
    }
    authenticate();
  }, [
    authState,
    oktaAuth,
    // userInfo,
    // setUserInfo,
    // CB_URL,
    // removeCookie,
    // setCookie,
  ]);

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
