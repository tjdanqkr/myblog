const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      // target: "http://14.32.18.89:8080/",
      target: "http://localhost:8000/",
      changeOrigin: true,
    })
  );
};
