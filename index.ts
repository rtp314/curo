import { Hono } from 'hono';
import { serveStatic } from 'hono/bun';
import dbMiddleware from 'db/dbConnection.js';
import authRoutes from './routes/auth/authRoutes.js';
import fileRoutes from './routes/files/fileRoutes.js';

const app = new Hono();

app.use('/login', serveStatic({ path: './public/info.html' }));

// app.use('*', dbMiddleware);
app.route('/api/', authRoutes);
app.route('/api/', fileRoutes);

Bun.serve({
  port: process.env.PORT!,
  fetch: app.fetch,
});

console.log('listening on port', process.env.PORT);
