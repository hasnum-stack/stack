import ComponentFactory from '../../components/ComponentFactory';

const BiSheng1Fields = [
  {
    type: 'div',
    value: 789789,
    key: '0',
  },
  {
    type: 'line',
    value: {
      label: 'biaoti',
      value: '字段value',
    },
    key: '0',
    props: { bordered: false, readonly: true },
  },
  {
    type: 'button',
    value: '点击',
    props: {
      type: 'primary',
    },
    key: '1',
  },
  {
    type: 'ul',
    key: 123,
    value: [
      {
        type: 'li',
        value: 'li1',
        key: 0,
      },
      {
        type: 'li',
        value: 'li2',
        key: 1,
      },
    ],
  },
  {
    type: 'card',
    value: [
      {
        type: 'div',
        value: 'li1',
        key: 0,
      },
      {
        type: 'div',
        value: 'li2',
        key: 1,
      },
    ],
  },
];
function BiSheng1() {
  return <ComponentFactory rawMaterials={BiSheng1Fields}></ComponentFactory>;
}
export default BiSheng1;
