import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];
function TestTable() {
  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, filters }) => {
      console.log('🚀 ~ TestTable ~ selectedKeys', selectedKeys);
      // console.log('🚀 ~ TestTable ~ filters', filters);
      return (
        <div style={{ padding: 8 }}>
          <Input
            // ref={node => {
            //   this.searchInput = node;
            // }}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{ marginBottom: 8, display: 'block' }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}>
              Search
            </Button>
            <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
              Reset
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                confirm({ closeDropdown: false });
                this.setState({
                  searchText: selectedKeys[0],
                  searchedColumn: dataIndex,
                });
              }}>
              Filter
            </Button>
          </Space>
        </div>
      );
    },
    filterIcon: filtered => {
      // console.log('🚀 ~ TestTable ~ filtered', filtered);
      return <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />;
    },
    // onFilter: (value, record) => {
    //   // return true;
    //   const a = record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : '';
    //   console.log('🚀 ~ TestTable ~ a', a);
    //   return a;
    // },
    onFilterDropdownVisibleChange: visible => {
      console.log('🚀 ~ TestTable ~ visible', visible);
      if (visible) {
        // setTimeout(() => this.searchInput.select(), 100);
      }
    },
  });
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    console.log('🚀 ~ handleSearch ~ dataIndex', dataIndex);
    console.log('🚀 ~ handleSearch ~ selectedKeys', selectedKeys);
    // confirm();
    // this.setState({
    //   searchText: selectedKeys[0],
    //   searchedColumn: dataIndex,
    // });
  };

  const handleReset = clearFilters => {
    clearFilters();
    // this.setState({ searchText: '' });
  };
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      // filtered: true,
      filters: [
        { text: 'John', value: 'John' },
        { text: 'Red', value: 'Red' },
      ],
      onFilter: (value, record) => record.name.includes(value),
      // ...this.getColumnSearchProps('name'),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '20%',
      // ...this.getColumnSearchProps('age'),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      ...getColumnSearchProps('address'),
      // sorter: (a, b) => a.address.length - b.address.length,
      // sortDirections: ['descend', 'ascend'],
    },
  ];

  return <Table columns={columns} dataSource={data} />;
}
export default TestTable;
