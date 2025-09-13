let a1: number;

// 上面已经定义number不能赋值字符串
// a = "1";

a1 = 1;
a1 = 2;

let b1: string;
b1 = "HELLO";

let c1: boolean;

c1 = true;

// c=123;

/**
 * 求和
 * @param a
 * @param b
 */
function sum(a: number, b: number) {
    return a + b;
}

let result = sum(1, 2);

console.log(result);

