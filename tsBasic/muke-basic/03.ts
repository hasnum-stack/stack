/**
 * 接口
 *
 */
interface McCormick {
  a: string;
  b: number;
  c?: boolean; //可选
  readonly d: boolean; //只读
  e(name: string): string; //函数
  f: number[];
}

let obj: McCormick = {
  a: '1',
  b: 1,
  d: false,
  e: function (name) {
    return name;
  },
  f: [1, 2, 3],
};

interface b<T> {
  a: string;
  b: number;
  c: T[];
}
let obj2: b<boolean> = {
  a: '123',
  b: 123,
  c: [true, true],
};

interface IFpMittie {
  (x: number): string;
}

let Summers: IFpMittie = (y): string => {
  return '123';
};
