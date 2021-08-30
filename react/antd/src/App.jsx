// import logo from './logo.svg';
import { Button, Space, Upload, Popconfirm, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './App.css';

function App() {
  return (
    <Space>
      Space
      <Button
        type="primary"
        onClick={() => {
          message.open({
            content: '1334',
          });
        }}>
        Button123
      </Button>
      {/* <Upload>
        <Button>
          <UploadOutlined /> Click to Upload
        </Button>
      </Upload> */}
      <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
        <Button></Button>
      </Popconfirm>
    </Space>
  );
}

export default App;
