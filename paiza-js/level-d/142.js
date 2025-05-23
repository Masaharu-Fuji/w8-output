process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  const array = line.split(" ");
  const targetTree = Math.ceil(parseInt(array[0]) / parseInt(array[1]));
  const sumLight = targetTree * parseInt(array[2]);
  lines.push(sumLight);
});
reader.on('close', () => {
  console.log(lines[0]);
});