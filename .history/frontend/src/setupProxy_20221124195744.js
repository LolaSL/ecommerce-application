import { createProxyMiddleware } from 'http-proxy-middleware';

 const proxyMiddleware = createProxyMiddleware(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:7000',
      changeOrigin: true,
    })
  );
};
export default