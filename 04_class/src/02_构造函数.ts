class Dog {
  name: string;
  age: number;

  // 构造函数, 在对象创建时调用
  constructor(name: string, age: number) {
    // 在实例方法中, this 就表示当前的实例
    // 构造函数中当前对象就是当前新建的那个对象
    // 可以通过 this 向新建的对象中添加属性
    console.log('构造函数执行了~~~');
    console.log(this);

    this.name = name;
    this.age = age;
  }

  bark() {
    // 在方法中可以通过 this 来表示当前调用方法的对象
    console.log(this);
  }
}

const dog = new Dog('小黑', 3);
const dog2 = new Dog('小白', 2);

console.log(dog);
dog2.bark()
