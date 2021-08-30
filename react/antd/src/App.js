// import logo from './logo.svg';
import { Button, Space, Upload, Popconfirm, message } from 'antd';
import Notification from 'rc-notification';
import { UploadOutlined } from '@ant-design/icons';
import './App.css';
let notificationInstance = null;
Notification.newInstance({}, instance => {
  notificationInstance = instance;
});
function App() {
  return (
    <Space>
      Space
      <Button
        type="primary"
        onClick={() => {
          // notificationInstance.notice({
          //   content: '123',
          //   key: '123',
          // });
          // return;

          // message.open({
          //   key: '123',
          //   content: '123',
          // });
          message.open({
            key: '456',
            duration: 0,
            content: '456',
          });
        }}>
        Button
      </Button>
      <Button
        type="primary"
        onClick={() => {
          const a = message.open({
            // key: '123',
            content: '123',
          });
          // setTimeout(() => {
          //   a('123');
          // },200);
          console.log('🚀 ~ App ~ a', a);
          // message.open({
          //   key: '456',
          //   duration: 0,
          //   content: '456',
          // });
        }}>
        message
      </Button>
      <Button
        onClick={() => {
          message.destroy('456');
        }}>
        destroy
      </Button>
      <Button
        type="primary"
        onClick={() => {
          console.log(notificationInstance);
          notificationInstance.removeNotice('123');
        }}>
        notificationInstance
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
