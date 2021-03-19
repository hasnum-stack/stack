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
 * 是所有类型的子类型,undefined,null类型的变量,```非严格模式```下可以赋值给其他类型的变量
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

//声明void类型的变量没意义
//严格模式下:void类型的变量只能被undefined赋值
let def5418690321317888: void;
let def7058214556270592: void = undefined;
let def7058214556270593: void = null;
let def1681478461161472: void = 1;
let def2870341827297280: void = 'Christopher McLaughlin';
//非严格模式下,5.中提到 null与undefined是其他类型的子类,非严格模式下void不例外,所以可以被赋值到void类型的变量

/**
 * 声明准确的类型就要对应的准确值,严格模式与非严格模式null与undefined的表现不同
 * void表示没有返回值
 */

let arr: number[] = [1, 2];
