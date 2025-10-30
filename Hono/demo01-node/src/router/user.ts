import { Hono } from 'hono';
const user = new Hono();
user.get('/list', c => {
  return c.text('User List');
});
user.get('/:id', c => {
  const id = c.req.param('id');
  return c.text(`User ID: ${id}`);
});
export default user;
