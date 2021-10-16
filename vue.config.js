module.exports = {
    devServer: {
        proxy: {
            '/w': {
                target: 'https://en.wikipedia.org',
                changeOrigin: true,
                xfwd: false,
            },
            "/api": {
                target: "https://stacc-code-challenge-2021.azurewebsites.net",
                secure: false
            },
        }
    }
}