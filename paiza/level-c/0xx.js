process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 097
reader.on("close", () => {
  const array = lines[0].split(" ");
  for (let i = 1; i <= parseInt(array[0]); i++) {
    let getter = "";
    if (i % parseInt(array[1]) === 0) {
      getter = getter.concat("A");
    }
    if (i % parseInt(array[2]) === 0) {
      getter = getter.concat("B");
    }
    if (getter === "") {
      getter = getter.concat("N");
    }
    console.log(getter);
  }
});
