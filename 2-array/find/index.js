export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  return collection.find(element => element.age <= 20 && element.age > 10).name;
}
