# codemod_antd_v3_2_v5

To install dependencies:

```bash
bun install
```

### 执行
```bash
bun run index.ts
```

- @ant-design/compatible中Form去掉
- 去掉Form.create()
- 获取Form.create()中的组件,给其添加FormInstance
- Form添加到antd
- remove getFieldDecorator(),添加Form.Item的属性
- 添加 formRef = React.createRef(),this.props.form 替换成 this.formRef.current 
- Form添加ref={this.formRef}
- icon的type改成icon

### 执行
```bash
bun run index2.ts
```
1. Drawer下的组件rootClassname改成className

## 手动
### 安装与替换
moment -> dayjs
dayjs().hours() -> dayjs().hour()
dayjs().minutes() -> dayjs().minute()

### form
```
this.formRef.current.validateFields((err, values) => {
if (err) {
return;
}
this.props.changeConfirmLoading(true);
this.props.onOk(values.dueDayDeadline);
});
```
改成
```
this.formRef.current.validateFields().then(values => {
this.props.changeConfirmLoading(true);
this.props.onOk(values.dueDayDeadline);
});
```

