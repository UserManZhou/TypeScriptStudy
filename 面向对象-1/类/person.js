"use strict";
//class person 类
class Person {
    // 构造函数
    constructor(name, age) {
        // readonly 只读属性，无法在构造函数中赋值
        this.age2 = 2;
        this.name = name;
        this.age = age;
    }
    // sayHello 方法
    sayHello(person) {
        console.log('name:', person.name);
        console.log('age:', person.age);
    }
    // sayHello2 静态方法
    static sayHello2(person) {
        console.log('name:', person.name);
        console.log('age:', person.age);
    }
}
// static readonly 静态只读属性，无法在构造函数中赋值
Person.age3 = 3;
// 静态属性赋值
Person.name2 = '李四';
// 静态属性赋值
//Person.age3 = 3;
// 实例属性赋值
const p1 = new Person('张三', 18);
// 实例属性赋值
p1.age = 19;
// 实例属性赋值
p1.name = '张三2';
// 调用实例方法
p1.sayHello(p1);
// 调用静态方法
Person.sayHello2(p1);
