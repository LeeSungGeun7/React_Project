const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
    app.use(
        "/topic",
        createProxyMiddleware({ target: "http://localhost:3737", ws: true })
    );
};