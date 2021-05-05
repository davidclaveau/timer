const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('\x07');
  }
  const numbersAllowed = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  if (key === numbersAllowed.find(element => element === key)) {
    process.stdout.write(`Setting timer for ${key} seconds...\n`);

    let number = Number(key);
    number *= 1000;
    
    setTimeout(() => {
      process.stdout.write('\x07');
    }, number);
  }
  if (key === '\u0003') {
    process.stdout.write(`Thanks for using me, ciao!\n`);
    process.exit();
  }
});