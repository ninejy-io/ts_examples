// object 表示一个 js 对象
let aa: object;
aa = {};
aa = function() {};

// {} 用来指定对象中可以包含哪些属性
// 语法: {属性名: 属性值, 属性名: 属性值}
// 在属性名后边加上?, 表示属性是可选的
let bb: {name: string, age?: number}
bb = {name: '孙悟空', age: 18}

// [propName: string]: any 表示任意类型的属性
let cc: {name: string, [propName: string]: any};
cc = {name: '猪八戒', age: 18, gender: '男'};

/**
 * 设置函数结构体类型声明
 * 语法: (形参: 类型, 形参: 类型) => 返回值
 */
let dd: (a: number, b: number)=>number;
dd = function(n1, n2) {
    return n1 + n2
}


/**
 * 数组类型声明:
 * 类型[]
 * Array<类型>
 */
// string[] 表示字符串数组
let ee: string[];
ee = ['a', 'b', 'c']

let gg: number[];
gg = [1, 2, 3]


/**
 * 元组: 长度固定的数组
 * [类型, 类型, 类型]
 */
let hh: [string, string];
hh = ["hello", "abc"];


/**
 * enum 枚举类型
 */
enum Gender {
    male,
    female
}

let i: {name: string, gender: Gender}
i = {
    name: '孙悟空',
    gender: Gender.male
}
console.log(i.gender === Gender.male);

// & 表示同时
let j: {name: string} & {age: number};
j = {name: '孙悟空', age: 18};


// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5;
let mm: myType;
let nn: myType;
let oo: myType;
mm = 1;
mm = 2;
// mm = 6;
