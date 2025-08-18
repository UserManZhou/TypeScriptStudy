// 可以直接使用字面量进行类型声明
let a: 10;
a = 10;
// 可以使用|来链接多个类型（联合类型）
let b: "male" | "mfalse";
b = "male";
b = "mfalse";
let c: boolean | string;
c = true;
c = 'hello';
//  any 表示任意类型，一个变量设置i类型any后相当于对该变量挂壁了TS的类型检测，此时变量可以接受任意类型的值
//  在使用TS时，不建议使用any类型，因为any类型会关闭TS的类型检测，导致变量接受任意类型的值，从而导致运行时错误
// var d: any;
//  声明变量如果不指定类型，则TS会根据变量的赋值类型进行类型推导
let d;
d = 10;
d = 'hello';
d = true;
//  unknown 表示未知类型
let e: unknown;
e = 10;
e = 'hello';
e = true;
let s: string;
//  d的类型是any，它可以赋值给任意变量
s = d;
e = 'hello';
//  unknown实际上就是一个类型安全的any
//  unknown类型的变量，不能直接赋值给其他变量
if (typeof e === 'string') {
    s = e;
}
//  类型断言
/**
 * 语法:
 *  变量 as 类型
 *  <类型>变量
 */
s = e as string;
s = <string>e;

//  void表示空，以函数为例，就表示没有返回值的函数
function fn(): void {
}

//  never 表示永远不会返回结果
function fn2(): never {
    throw new Error('报错了');
}

//  obj表示一个JS对象
let f: object;
f = {};
f = function () {
}
//  {}用来指定对象中可以包含哪些属性
//  语法 :{属性名:属性值}
//  在属性名后面加上？表示属性是可选的
let f2: {
    name: string,
    age?: number
};
f2 = {name: 'hello'};
//  [propName:string]:any 表示对象中可以包含任意数量的属性，属性名是任意的，属性值任意的类型
let f3: {
    name: string,
    [propName: string]: any
};
f3 = {name: 'hello', age: 18, gender: '男'}
/**
 * 函数类型
 * 语法: (参数列表) => 返回值类型
 * 参数列表中可以指定参数类型，也可以不指定参数类型
 * 返回值类型可以指定也可以不指定
 * 函数类型也可以作为参数的类型
 * 函数类型也可以作为返回值的类型
 * 函数类型也可以作为变量的类型
 *
 */
let f4: (a: number, b: string) => number;
/*
f4 = function (a: number, b: string): number {
    return a + b.length;
}
*/
//  string[] 表示一个字符串数组
/**
 * 数组类型
 * 语法: Array<元素类型> | 元素类型[]
 */
let ar: string[];
ar = ['a', 'b', 'c'];
let ar2: number[];
ar2 = [1, 2, 3];
let ar3: Array<number>;
ar3 = [1, 2, 3]
/**
 * 元组类型
 * 语法: [元素1的类型, 元素2的类型, ...]
 * 元组类型是一种特殊的数组类型，元组类型中的元素可以有任意类型，但是元素数量是固定的
 */
let h: [string, string];
h = ['je', 'e'];

/**
 * 枚举
 * 语法: enum 枚举名 { 枚举项1, 枚举项2, ...}
 * 枚举项的值默认是索引值，也可以指定枚举项的值
 * 枚举项也可以是字符串
 * 枚举项也可以是字符串和数字的组合
 * 枚举项也可以是数字和字符串的组合
 */
enum Gender {
    male = '男',
    mfalse = '女'
};
let i: { name: string, gender: Gender };
i = {
    name: 'je',
    gender: Gender.mfalse
}
console.log(Gender.male === i.gender);
/**
 * &
 * 联合类型
 * 语法: 类型1 & 类型2
 * &表示两个类型之间的交集
 * &表示两个类型之间的并集表示一个变量可以是多个类型中的任意一个
 */
let j: { name: string } & { age: number };
j = {name: 'je', age: 18};
/**
 * 类型别名
 * 语法: type 类型名 = 类型
 * 类型别名可以给一个类型起一个别名
 * 类型别名也可以用来定义联合类型
 */
type myType = 1 | 2 | 3;
let k: myType;
let k2: myType;
let m: myType;