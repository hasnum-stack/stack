import Notification from 'rc-notification'
let notificationInstance = null;
Notification.newInstance({},(instance) =>{
  notificationInstance = instance
})
function App() {
  console.log('🚀 ~ App ~ notificationInstance', notificationInstance);
  
  return (
    <div className="App">
      <button onClick={()=>{
        notificationInstance.notice({
          content:'123',
        key:'0'
        })
       
      }}>点击</button>

<button onClick={()=>{
    notificationInstance.removeNotice('0')
        // notificationInstance.notice({
        //   content:'123',
        // key:'0'
        // })
      }}>点击</button>
    </div>
  );
}

export default App;
