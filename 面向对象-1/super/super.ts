(function () {
  class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    say() {
      console.log(this.name + '在说话');
    }
  }
  class Dog extends Animal {
    say() {
      super.say();
    }
  }
})();
