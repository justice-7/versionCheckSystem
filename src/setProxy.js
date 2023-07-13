const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://3.36.74.212:8080/api/latest/versions',	// 서버 URL or localhost:설정한포트번호
      changeOrigin: true,
    })
  );
};