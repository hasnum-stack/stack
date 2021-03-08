/**
 * 原始数据类型
 * boolean,number,string,null,undefined
 * es6新增:Symbol,BigInt
 *
 */

/**
 * 1.boolean
 *
 */
let isDone: boolean = true;
// 注意:new Boolean返回的是Boolean对象,注意类型boolean与Boolean
// let byNewBoolean: boolean = new Boolean(true);
// let byNewBoolean: Boolean = new Boolean(true);

/**
 * 2.number
 *
 */
let isNumber: number = 123;

/**
 * 3.string
 *
 */
let isString1: string = 'typescript';
//模版字符串也可以
let isString2: string = `type${`script`}`;

/**
 * 4.Null与undefined
 *
 */
let isNull: null = null;
let isUndefined: undefined = undefined;

/**
 * 5.undefined 和 null
 * 是所有类型的子类型,undefined,null类型的变量,非严格模式下可以赋值给其他类型的变量
 *
 */
// let definition1: Symbol = null;
// let definition2: string = undefined;
// let definition4: number = undefined;

/**
 * 6.void
 * 表示没有返回值的类型
 *
 */
function fn1(): void {
  console.log('void');
}

//声明void类型的变量没意义,只能赋值undefined和null(5中提交 null与undefined是其他类型的子类,非严格模式下void不例外)
// let definition3: void = null;
let def2: void = undefined;
// let def4: void = 123;

// let def1: void;
// let definition4: number = def1;

/**
 * 个人总结
 * 准确的声明对应的类型,严格模式与费严格模式null与undefined的赋值不同
 * void是说没有返回值
 */
