(function () {
  /**
   * 抽象类
   * 抽象类不能被实例化，只能被继承
   * 抽象类可以有具体的方法实现，也可以有抽象方法
   */
  abstract class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    say() {
      console.log(this.name + '在说话');
    }
    /**
     * 抽象方法 必须在抽象类中定义，具体实现由子类实现
     * 抽象方法不能有具体的实现，只能定义方法的签名
     * 子类必须实现抽象方法，否则会报错
     * 抽象方法可以有默认的实现，但是默认实现不能被调用
     * 抽象方法可以有参数，也可以没有参数
     * 抽象方法可以有返回值，也可以没有返回值
     */
    abstract eat(): void;
  }
  class Dog extends Animal {
    say() {
      console.log(this.name + '在汪汪叫');
    }
    eat() {
      console.log(this.name + '在吃');
    }
  }
  const dog = new Dog('旺财', 1);
  dog.say();
})();
