import { useEffect, useState } from 'react';
import Table from '../table';
import Search from '../search';
// import { cleanObject } from '../../../utils';
console.log('🚀 ~ cleanObject', cleanObject({ a: 0 }));
const ProjectList: React.FC = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/users').then(async response => {
      if (response.ok) {
        const res = await response.json();
        setUserList(res);
      }
    });
  }, []);
  return (
    <>
      <Search userList={userList}></Search>
      <Table></Table>
    </>
  );
};
export default ProjectList;
