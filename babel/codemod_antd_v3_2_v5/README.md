# codemod_antd_v3_2_v5

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

1.@ant-design/compatible中Form去掉
2.去掉Form.create()
3.获取Form.create()中的组件,给其添加FormInstance
4.Form添加到antd
5.remove getFieldDecorator()

