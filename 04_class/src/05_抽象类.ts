(function() {
  /**
   * 以 abstract 关键字开头的类是抽象类
   *   抽象类和其他类区别不大, 只是不能用来创建对象
   *   抽象类就是专门用来被继承的类
   */
  abstract class Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    // 定义一个抽象方法
    // 抽象方法使用 abstract 关键字开头, 没有方法体
    // 抽象方法只能定义在抽象类中, 子类必须对抽象方法进行重写
    abstract sayHello() : void;
  }

  class Dog extends Animal {
    sayHello() {
        console.log('汪汪汪~');
    }
  }

  const dog = new Dog('旺财');
  dog.sayHello();

})();