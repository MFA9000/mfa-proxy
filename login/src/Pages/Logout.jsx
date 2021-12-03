import React, { useEffect, useState } from "react";
import { Link, Redirect } from "wouter";
import { useOktaAuth } from "@okta/okta-react";
import { useCookies } from "react-cookie";

const Logout = () => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "auth_user_info",
    "auth_token",
    "CB_URL",
  ]);
  const { authState, oktaAuth } = useOktaAuth();
  useEffect(() => {
    const CB_URL = cookies["CB_URL"];
    removeCookie("auth_user_info");
    removeCookie("auth_token");
    removeCookie("CB_URL");
    oktaAuth.signOut().then(() => {});
    if (CB_URL && CB_URL !== "false") window.location.replace(CB_URL);
    // if (CB_URL && CB_URL !== "false") window.location.replace(CB_URL);
    window.okta = oktaAuth;
  }, []);

  return authState?.isAuthenticated ? (
    <> Loging Out please wait </>
  ) : (
    <Redirect to="/" />
  );
};

export default Logout;
