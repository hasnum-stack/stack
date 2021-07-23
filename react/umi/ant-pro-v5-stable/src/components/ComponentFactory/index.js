import { Button, Row, Col, Card, Input } from 'antd';
function isObject(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === 'Object';
  // if (Object.prototype.toString.call(value).slice(8, -1) === 'Object') {
  //   // return true;
  //   // return genComponentByObject(value);
  //   return 'object';
  // }
  // return { type: 'next', value };
}
function isArray(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === 'Array';
  if (Object.prototype.toString.call(value).slice(8, -1) === 'Array') {
    // return genComponentByArray(value);
    return 'array';
  }
  // return { type: 'next', value };
}
// Function.prototype.after = function (fn) {
//   const self = this;
//   return function () {
//     const a = self(...arguments);
//     if (a.type === 'next') {
//       return fn(a);
//     }
//   };
// };
// function responsibility({ value }) {
//   console.log('🚀 ~ responsibility ~ value', value);
//   return { type: 'next', value };
// }
// const dsfs = responsibility.after(isObject).after(isArray);
// console.log('🚀 ~ dsfs({})', dsfs({ value: [] }));
const ComponentRouter = {
  div: {
    render: true,
    component: ({ children }) => {
      console.log('🚀 ~ children', children);
      return <div>{children}</div>;
    },
  },
  ul: {
    render: true,
    component: ({ children }) => <ul>{children}</ul>,
  },
  li: {
    render: true,
    component: ({ children }) => <li>{children}</li>,
  },
  row: {
    render: true,
    component: Row,
  },
  col: {
    render: true,
    component: Col,
  },
  button: { render: true, component: Button },
  card: { render: true, component: (props) => <Card hoverable bordered {...props} /> },
  line: {
    render: false,
    component: (props) => {
      console.log('🚀 ~ rest', props);
      return (
        <>
          {props.children.label} :
          <Input placeholder="Borderless" {...props} value={props.children.value} children={null} />
        </>
      );
    },
  },
};
const genComponentByObject = (item, index) => {
  const Guide = ComponentRouter[item.type];
  let Dsjfo = null;
  if (Guide.render) {
    Dsjfo = () => {
      return isObject(item.value)
        ? genComponentByObject(item.value)
        : isArray(item.value)
        ? genComponentByArray(item.value)
        : item.value;
    };
  } else {
    Dsjfo = () => item.value;
  }
  // console.log('🚀 ~ genComponentByObject ~ Dsjfo', Dsjfo);
  return (
    <Guide.component key={index} {...item.props} children={Dsjfo()}>
      {/* {isObject(item.value)
        ? genComponentByObject(item.value)
        : isArray(item.value)
        ? genComponentByArray(item.value)
        : item.value} */}
    </Guide.component>
  );
};
const genComponentByArray = (itemArray) => {
  return itemArray.map((item, index) => {
    return genComponentByObject(item);
  });
};

function ComponentFactory({ rawMaterials }) {
  return <>{genComponentByArray(rawMaterials)}</>;
}
export default ComponentFactory;
