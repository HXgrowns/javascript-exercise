// TODO 10: 在这里写实现代码
export default class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `My name is Tom. I am ${this.age} years old.`;
  }
}
