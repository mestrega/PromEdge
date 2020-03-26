import express from 'express';
import logger from 'morgan';
import path from 'path';
import AppRoutes from './routes';

const app = express();

const port = 3000;

app.use(logger('dev'));

// Routes are exported from a single file to keep this file clean
// This loop will create all the routes defined.
AppRoutes.forEach(route => {
  app.use('/', route);
});

app.listen( port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// Create a projectRoot so that fs knows where to save to
export const projectRoot = path.resolve(__dirname).replace(/\\/g, '/').replace(/src$/g, '');

export default app;