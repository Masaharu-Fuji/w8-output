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
  lines.push(line.split(' '));
});
reader.on('close', () => {
  for (let play = 1; play <= lines[1][0]; play++) {
      const checkA = parseInt(lines[play + 1][0]) - parseInt(lines[0][0]);
      if (checkA > 0) {
          console.log("Low");
      } else if (checkA === 0) {
          const checkB = parseInt(lines[play + 1][1]) - parseInt(lines[0][1]);
          if (checkB > 0) {
              console.log("High");
          } else {
              console.log("Low");
          }
      } else {
          console.log("High");
      }
  }
});