export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  let count = 0;
  for (const iterator of collection) {
    if (iterator.startsWith('粤A')) {
      count++;
    }
  }
  return count;
}
