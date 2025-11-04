(function () {
  // animal 动物类
  class Animal {
    // name 动物的名称
    name: string;
    // age 动物的年龄
    age: number;
    // constructor 构造函数
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    // say 动物的说话方法
    say() {
      // 动物的说话方法
      console.log(this.name + '在说话');
    }
  }
  // dog 狗类 extends 继承自动物类
  class Dog extends Animal {}
  // cat 猫类 extends 继承自动物类
  class Cat extends Animal {}
  // 实例化一个狗对象
  const dog = new Dog('旺财', 1);
  // 调用狗的说话方法
  dog.say();
  // 实例化一个猫对象
  const cat = new Cat('小白', 1);
  // 调用猫的说话方法
  cat.say();
})();
