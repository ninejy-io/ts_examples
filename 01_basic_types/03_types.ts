// 也可以直接使用字面量进行类型声明
let a: 10;
a = 10;

let b: "male" | "female";
b = "male";
b = "female";
// b = "hello";

let c: boolean | string;
c = true;
c = "hello";

// any 表示的是任意类型, 一个变量设置类型为 any 后相当于对该变量关闭了 ts 类型检测
// let d: any; // 显式any
let d; // 隐式any
d = 10;
d = 'hello';
d = true;

// unknown 表示未知的类型
let e: unknown;
e = 10;
e = 'hello';
e = true;

let s: string;

// d 的类型是 any, 它可以赋值给任意变量
// s = d;

e = 'hello';

// unknown 实际上就是一个类型安全的any
// unknown 类型的变量, 不能直接赋值给其他变量
// s = e;
if (typeof e === "string") {
    s = e;
}

// 类型断言, 可以用来告诉解析器变量的实际类型
s = e as string;
s = <string>e;

// void 用来表示空, 以函数为例, 表示没有返回值的函数
function fn() : void {
}

// never 表示永远不会返回结果
function fn2() : never {
    throw new Error('报错了!');
}
