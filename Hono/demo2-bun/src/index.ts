import { Hono } from 'hono';

const app = new Hono();

app.get('/', c => {
  return c.text('Hello Hono!');
});
console.log(app.port);

// export default app;
// index.ts
export default {
  port: 3001,
  fetch: req => new Response('Hello world!'),
};
