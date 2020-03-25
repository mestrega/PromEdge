import express from 'express';
import logger from 'morgan';
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

export default app;