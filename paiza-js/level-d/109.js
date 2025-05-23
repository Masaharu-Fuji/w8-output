process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
let lines = [];
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
    const array = line.split(" ");
    const checkText = array[0].split(array[1]).join("");
    if (checkText === "") {
        lines.push("Yes");
    } else {
        lines.push("No");
    }
});
reader.on('close', () => {
  console.log(lines[0]);
});

// 1/11, 2/22 条件漏れ