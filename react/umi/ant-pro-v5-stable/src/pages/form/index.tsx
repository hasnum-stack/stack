import { FC } from 'react';
import { Form, Input, Select, DatePicker } from 'antd';
const Option = Select.Option;
const { RangePicker } = DatePicker;

const FormTest: FC = () => {
  const [form] = Form.useForm();
  return (
    <>
      <Form form={form}>
        <Form.Item label="Address">
          <Input.Group>
            <Form.Item
              name={['address', 'province']}
              noStyle
              rules={[{ required: true, message: 'Province is required' }]}
            >
              <Select placeholder="Select province">
                <Option value="Zhejiang">Zhejiang</Option>
                <Option value="Jiangsu">Jiangsu</Option>
              </Select>
            </Form.Item>
            <Form.Item
              shouldUpdate={(prevValues, curValues) => {
                console.log('🚀 ~ prevValues', prevValues);
                return prevValues?.address?.province !== curValues?.address?.province;
              }}
            >
              {({ getFieldValue }) => {
                console.log(123);
                return getFieldValue(['address', 'province']) === 'Zhejiang' ? (
                  <Form.Item
                    name={['address', 'street']}
                    noStyle
                    rules={[{ required: true, message: 'Street is required' }]}
                  >
                    <Input style={{ width: '50%' }} placeholder="Input street" />
                  </Form.Item>
                ) : (
                  <Form.Item
                    name={['address', 'date']}
                    noStyle
                    rules={[{ required: true, message: 'Street is required' }]}
                  >
                    <RangePicker></RangePicker>
                  </Form.Item>
                );
              }}
            </Form.Item>
          </Input.Group>
          <Form.Item>
            <Input style={{ width: '50%' }} placeholder="Input street" />
          </Form.Item>
        </Form.Item>
      </Form>
    </>
  );
};
export default FormTest;
