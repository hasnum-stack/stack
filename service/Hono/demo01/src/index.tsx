import { Hono } from 'hono'
import {Button} from "antd";

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
});
app.get("/tsx", (c)=>{
  return c.html(<div><Button>123</Button></div>)
})
export default app
