getFieldDecorator("name", {
  rules: [{
    required: true,
    message: "请输入姓名",
    transform: whitespaceTrim
  }]
})(<Input />)