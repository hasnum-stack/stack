const Search: React.FC<{ userList: user[] }> = ({ userList }) => {
  console.log('🚀 ~ userList', userList);
  return (
    <div>
      <input type="text" />
      <select id="">
        <option value={''}>全部</option>
        {userList.map(({ id, name }) => (
          <option value={id} key={id}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Search;
