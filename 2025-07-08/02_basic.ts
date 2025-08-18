let a: number;

// 上面已经定义number不能赋值字符串
// a = "1";

a = 1;
a = 2;

let b: string;
b = "HELLO";

let c: boolean;

c = true;

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

