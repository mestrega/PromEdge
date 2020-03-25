import express from 'express';
import logger from 'morgan';
import path from 'path';
import AppRoutes from './routes';

const app = express();

const port = 3000;

app.use(logger('dev'));

AppRoutes.forEach(route => {
  app.use('/', route);
});

app.listen( port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

export const projectRoot = path.resolve(__dirname).replace(/\\/g, '/').replace(/src$/g, '');

export default app;