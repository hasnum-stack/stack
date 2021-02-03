import { IApi } from 'umi';
export default (api: IApi) => {
  api.addEntryCode(() => {
    return `console.log(123)`;
  });
};
