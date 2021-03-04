// 声明一个变量a, 同时指定它的类型为number
let a: number;

// a 的类型设置为了number, 在以后的使用过程中 a 的值只能是数字
a = 10;
a = 33;

// a = 'hello'; // 此行代码会报错

let b: string;
b = 'hello';
// b = 123;

// 声明变量直接进行赋值
// let c: boolean = true;

// 如果变量的声明和赋值是同时进行的, ts 可以自动对变量类型进行检测
let c = false;
c = true;

function sum(a: number, b: number): number {
    return a + b;
}

let result = sum(124, 456);
