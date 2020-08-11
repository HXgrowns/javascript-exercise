// TODO 20: 在这里写实现代码
import Person from './person';

export default class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    const klassNum = this.klass == null ? `No Class` : `Class ${this.klass}`;
    return `${super.introduce()} I am a Teacher. I teach ${klassNum}.`;
  }
}
