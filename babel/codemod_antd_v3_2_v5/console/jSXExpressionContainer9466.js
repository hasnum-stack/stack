{getFieldDecorator("email", {
  rules: [{
    type: "email",
    message: "请输入正确的邮箱",
    transform: whitespaceTrim
  }]
})(<Input />)}