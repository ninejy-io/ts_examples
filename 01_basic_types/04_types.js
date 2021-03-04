// object 表示一个 js 对象
var aa;
aa = {};
aa = function () { };
// {} 用来指定对象中可以包含哪些属性
// 语法: {属性名: 属性值, 属性名: 属性值}
// 在属性名后边加上?, 表示属性是可选的
var bb;
bb = { name: '孙悟空', age: 18 };
// [propName: string]: any 表示任意类型的属性
var cc;
cc = { name: '猪八戒', age: 18, gender: '男' };
/**
 * 设置函数结构体类型声明
 * 语法: (形参: 类型, 形参: 类型) => 返回值
 */
var dd;
dd = function (n1, n2) {
    return n1 + n2;
};
/**
 * 数组类型声明:
 * 类型[]
 * Array<类型>
 */
// string[] 表示字符串数组
var ee;
ee = ['a', 'b', 'c'];
var gg;
gg = [1, 2, 3];
/**
 * 元组: 长度固定的数组
 * [类型, 类型, 类型]
 */
var hh;
hh = ["hello", "abc"];
/**
 * enum 枚举类型
 */
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
var i;
i = {
    name: '孙悟空',
    gender: Gender.male
};
console.log(i.gender === Gender.male);
