// import logo from './logo.svg';
import { Button, Space, Upload, Popconfirm } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './App.css';

function App() {
    return (
        <Space>
            Space
            <Button type="primary">Button</Button>
            <Upload>
                <Button>
                    <UploadOutlined /> Click to Upload
                </Button>
            </Upload>
            <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
                <Button>Confirm</Button>
            </Popconfirm>
        </Space>
    );
}

export default App;
