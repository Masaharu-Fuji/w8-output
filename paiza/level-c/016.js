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
  const array = line.split('');
  const converter = array.map((char) => {
      switch (char) {
          case 'A':
            return "4";
          case 'E':
            return "3";
          case 'G':
            return "6";
          case 'I':
            return "1";
          case 'O':
            return "0";
          case 'S':
            return "5";
          case 'Z':
            return "2";
          default:
            return char;
      }
  });
  lines.push(converter.join(""));
});
reader.on('close', () => {
  console.log(lines[0]);
});