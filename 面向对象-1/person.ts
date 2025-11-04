class Person {
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  name: string;
  age: number;

  sayHello(person: Person) {
    console.log('name:', person.name);
    console.log('age:', person.age);
  }
}

const p1 = new Person('张三', 18);
p1.sayHello(p1);
