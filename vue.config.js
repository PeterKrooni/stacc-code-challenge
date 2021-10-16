module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "https://stacc-code-challenge-2021.azurewebsites.net",
                secure: false
            },
        }
    }
}