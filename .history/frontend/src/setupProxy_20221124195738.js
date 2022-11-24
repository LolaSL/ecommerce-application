import { createProxyMiddleware } from 'http-proxy-middleware';

 const(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:7000',
      changeOrigin: true,
    })
  );
};
export default