<Form.Item
  label="姓名"
  name="name"
  rules={[
    {
      required: true,
      message: "请输入姓名",
      transform: whitespaceTrim,
    },
  ]}
>
  {<Input />}
</Form.Item>;
