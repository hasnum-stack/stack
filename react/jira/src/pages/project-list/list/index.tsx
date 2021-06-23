import style  from './index.scss';
const ProjectList: React.FC = () => {
  return (
    <div>
      <div>
        <input type="text" />
        <select name="" id="">
          <option value="1">1</option>
        </select>
      </div>

      <table className={style.tableList} cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>
            <th>名称</th>
            <th>负责人</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>骑手管理</td>
            <td>高修文</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default ProjectList;
