import { FC, useState } from 'react';
import { Checkbox, Divider, Table } from 'antd';
const CheckboxGroup = Checkbox.Group;
const plainOptions = [
  {
    label: '新增',
    value: 'add',
  },
  {
    label: '修改',
    value: 'edit',
  },
];

const TableWithCheckbox: FC = () => {
  const [dataSource, setdataSource] = useState([
    {
      id: '0',
      age: ['add', 'edit'],
      name: true,
    },
    {
      id: '1',
      age: ['add'],
      name: true,
    },
  ]);

  const [checkedList, setCheckedList] = useState([]);
  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(false);
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render(item, record, index) {
        console.log('🚀 ~ render ~ record', record);
        return (
          <Checkbox
            indeterminate={true}
            checked={false}
            onChange={(e) => {
              return;
              setdataSource((list) => {
                const currentList = [...list];
                currentList.splice(index, 1, { ...record, age: e });
                return currentList;
              });
            }}
          >
            Check all
          </Checkbox>
        );
      },
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      editable: true,
      render(item, record, index) {
        return (
          <CheckboxGroup
            options={plainOptions}
            value={item}
            onChange={(e) =>
              setdataSource((list) => {
                const currentList = [...list];
                currentList.splice(index, 1, { ...record, age: e });
                return currentList;
              })
            }
          />
        );
      },
    },
  ];

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions.map((item) => item.value) : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <>
      <Table dataSource={dataSource} columns={columns} rowKey="id" />
    </>
  );
};
export default TableWithCheckbox;
