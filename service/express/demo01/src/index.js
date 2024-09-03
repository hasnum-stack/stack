const express = require('express');
const app = express();
const port = 9800;

// 使用 JSON 中间件来解析请求体中的 JSON 数据
app.use(express.json());

// 定义一个 GET 接口
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// 定义一个 POST 接口
app.post('/data', (req, res) => {
  const data = req.body;
  res.json({
    version: '1.0.0',
    errorCode: 200,
    errorDescription: 'OK',
  });
});

// 定义一个 PUT 接口
app.put('/update', (req, res) => {
  const updateData = req.body;
  res.json({ message: 'Data updated successfully', updatedData: updateData });
});

// 定义一个 DELETE 接口
app.delete('/delete', (req, res) => {
  res.json({ message: 'Data deleted successfully' });
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
