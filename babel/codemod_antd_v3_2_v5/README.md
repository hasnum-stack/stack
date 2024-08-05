# codemod_antd_v3_2_v5

To install dependencies:

```bash
bun install
```

### 执行
```bash
bun run index.ts
```

- 1.@ant-design/compatible中Form去掉
- 2.去掉Form.create()
- 3.获取Form.create()中的组件,给其添加FormInstance
- 4.Form添加到antd
- 5.remove getFieldDecorator(),添加Form.Item的属性
- 6.icon的type改成icon

### 执行
```bash
bun run index2.ts
```
1. Drawer下的组件rootClassname改成className


### 安装与替换
moment -> dayjs
