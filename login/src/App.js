import React from "react";
import "./App.css";

import { Router, Route, Redirect } from "wouter";

import { Security, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { CookiesProvider, useCookies } from 'react-cookie';

import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Logout from "./Pages/Logout";

import "bootstrap/dist/css/bootstrap.min.css";

const issuer = process.env.REACT_APP_OKTA_ISSUER;
const clientId = process.env.REACT_APP_OKTA_CLIENTID;
const redirect = process.env.REACT_APP_OKTA_APP_BASE_URL + "/callback";

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  // console.log(query)//"app=article&act=news_content&aid=160990"
  var vars = query.split("&");
  // console.log(vars) //[ 'app=article', 'act=news_content', 'aid=160990' ]
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    // console.log(pair)//[ 'app', 'article' ][ 'act', 'news_content' ][ 'aid', '160990' ] 
    if (pair[0] == variable) { return pair[1]; }
  }
  return (false);
}
const CookieComponent = (props) => {
  const url = getQueryVariable("CB_URL")
  const [c, setcookie, removeC] = useCookies(['CB_URL']);

  if (!url || url === 'false') {
    // removeC('CB_URL')
    return <> </>
  }

  setcookie("CB_URL", url, { path: '/' })
  return <> </>
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.oktaAuth = new OktaAuth({
      issuer: issuer,
      clientId: clientId,
      redirectUri: redirect,
    });

    window.okta = this.oktaAuth
    this.restoreOriginalUri = async (_oktaAuth, originalUri) => {
      window.location.replace(
        toRelativeUrl(originalUri || "/", window.location.origin)
      );
    };
  }

  render() {
    return (
      <CookiesProvider>
        <Router>
          <CookieComponent />
          <Security
            oktaAuth={this.oktaAuth}
            restoreOriginalUri={this.restoreOriginalUri}
          >
            <Route path="/" component={Home} />
            <Route path="/callback" component={LoginCallback} />
            <Route path="/Profile" component={Profile} />
            <Route path="/logout" component={Logout} />
            {/* <Route component={(props) => <Redirect to={'/404'} />} /> */}
          </Security>
        </Router>
      </CookiesProvider>
    );
  }
}

export default App;
