<Form.Item
  label="邮箱"
  name="email"
  rules={[
    {
      type: "email",
      message: "请输入正确的邮箱",
      transform: whitespaceTrim,
    },
  ]}
>
  <Input />
</Form.Item>;
