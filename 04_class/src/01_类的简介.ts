// 使用 class 关键字来定义一个类
/**
 * 对象中主要包括了两个部分:
 *  属性
 *  方法
 */
class Persion {
  // 定义实例属性
  name: string = '孙悟空';

  // 在属性前面使用 static 关键字可以定义类属性 (静态属性)
  static age: number = 18;

  // readonly 只读属性
  readonly gender: string = '男';

  // 定义实例方法
  sayHello() {
    console.log('Hello, 大家好!');
  }

  // 类方法 (静态方法)
  static sayGoodbye() {
    console.log('See you.');
  }
}

const per = new Persion();

console.log(per);
console.log(per.name);
console.log(Persion.age);
per.sayHello();
Persion.sayGoodbye();
