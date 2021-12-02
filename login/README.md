# React Routing Example

This repository shows you how to use Okta in a React application without the benefit of `react-router`. Please read [Build a Secure SPA with React Routing][blog] to see how it was created.

**Prerequisites:**

- [Node 14](https://nodejs.org/)
- [Okta CLI](https://cli.okta.com)

> [Okta](https://developer.okta.com/) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage and secure users and roles in any application.

* [Getting Started](#getting-started)
* [Links](#links)
* [Help](#help)
* [License](#license)

## Getting Started

To run this example, run the following commands:

```bash
git clone https://github.com/oktadev/okta-react-routing-example.git
cd okta-react-routing-example
```

### Create an OIDC Application in Okta

Create a free developer account with the following command using the [Okta CLI](https://cli.okta.com):

```shell
okta register
```

If you already have a developer account, use `okta login` to integrate it with the Okta CLI. 

Provide the required information. Once you register, create a client application in Okta with the following command:

```shell
okta apps create
```

You will be prompted to select the following options:
- Type of Application: **2: SPA**
- Redirect URI: `http://localhost:3000/callback`
- Logout Redirect URI: `http://localhost:3000`

The application configuration will be printed to your screen:

```shell
Okta application configuration:
Issuer:    https://{yourOktaDomain}/oauth2/default
Client ID: {yourClientId}
```

Add a file for `.env`

```shell
ni .env
```

or in Linux

```shell
touch .env
```

Add the following to .env

```dotenv
REACT_APP_OKTA_CLIENTID={yourClientId}
REACT_APP_OKTA_APP_BASE_URL=http://localhost:3000
REACT_APP_OKTA_ISSUER=https://{yourOktaDomain}/oauth2/default
```

If you haven't done so already, install the dependencies.

```shell
npm install
```

Start the React server.

```shell
npm start
```

Open `http://localhost:3000` in your favorite browser and you should be able to see the home page.

## Links

This example uses the following open source libraries from Okta:

* [Okta React SDK](https://github.com/okta/okta-react)
* [Okta CLI](https://github.com/okta/okta-cli)

## Help

Please post any questions as comments on the [blog post][blog], or visit our [Okta Developer Forums](https://devforum.okta.com/).

## License

Apache 2.0, see [LICENSE](LICENSE).

[blog]: https://developer.okta.com/blog/2021/11/01/react-routing
