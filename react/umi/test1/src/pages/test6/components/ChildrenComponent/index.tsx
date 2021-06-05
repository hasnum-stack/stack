import { forwardRef, useImperativeHandle, useState } from 'react';

export type childRefType = {
  setCount: (arg0: number) => void;
};
const ChildrenComponent: React.ForwardRefRenderFunction<childRefType, any> = (props, ref) => {
  console.log('🚀 ~ props', props);
  console.log('🚀 ~ ChildrenComponent ~ ref', ref);
  const [state, setState] = useState(0);
  useImperativeHandle(ref, () => ({
    setCount: setState,
  }));
  return <div> ChildrenComponent{state}</div>;
};
export default forwardRef(ChildrenComponent);
