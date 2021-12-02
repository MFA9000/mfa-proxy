module.exports = {
    proxyRouter: {
        'login.localhost:3000': 'http://localhost:3001',
        'rps.localhost:3000': 'http://localhost:3002',
        'app1.localhost:3000': 'http://localhost:3003',
        'app2.localhost:3000': 'http://localhost:3004',
    },
    defaultRouterPath: 'localhost:3000/404'
}