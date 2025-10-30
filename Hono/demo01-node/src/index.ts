import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import user from './router/user.js';
const app = new Hono();

app.get('/', c => {
  return c.text('Hello Hono!');
});

app.route('/api/user', user);

serve(
  {
    fetch: app.fetch,
    port: 3002,
  },
  info => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
