module.exports = {
    proxyRouter: {
        'login.localhost': 'http://localhost:3001',
        '/login': 'http://localhost:3001',
        'rps.localhost': 'http://localhost:3002',
        'app1.localhost': 'http://localhost:3003',
        'app2.localhost': 'http://localhost:3004',
    },
    defaultRouterPath: 'http://login.localhost'
}