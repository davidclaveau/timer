const args = process.argv.slice(2);
const argsNum = [];

for (const arg of args) {
  const number = Number(arg);
  if (number > 0) {
    argsNum.push(number);
  }
}

for (let num of argsNum) {
  num *= 1000;
  if (!isNaN(num)) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, num);
  }
}