(function() {
  class A {
    /**
     * public 实例和类都能访问
     * private 只有实例内能访问
     * protected 类内和子类内能访问
     */
    public name: string;
    private _age: number;
    protected gender: string;

    constructor(name: string, age: number, gender: string) {
      this.name = name;
      this._age = age;
      this.gender = gender;
    }

    setName(value: string) {
      this.name = value;
    }
    getName() {
      return this.name;
    }

    get age() {
      return this._age;
    }

    set age(value: number) {
      if (value >= 0) {
        this._age = value;
      }
    }
  }

  const a = new A('张三', 18, '男');
  console.log(a.name)


  class C {
    // 直接将属性定义在构造函数中
    constructor(public name: string, public age: number, public gender: string) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  }

  const c = new C('张三', 19, '男');
})();