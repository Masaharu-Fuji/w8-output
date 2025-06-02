process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", (line) => {
  lines.push(line);
});
reader.on("close", () => {
  const option = lines[0].split(" ");
  const xy = lines[1].split(" ");
  let positionX = parseInt(xy[1] - 1);
  let positionY = parseInt(xy[0] - 1);

  const arrow = lines[2].split("");

  let map = [];
  for (var y = 0; y < option[1]; y++) {
    map.push(lines[y + 3].split(" "));
  }
  let step = 0;
  while (step < option[0]) {
    switch (arrow[step]) {
      case "F":
        positionY = parseInt(positionY - 1);
        console.log(map[positionY][positionX]);
        break;
      case "B":
        positionY = parseInt(positionY + 1);
        console.log(map[positionY][positionX]);
        break;
      case "L":
        positionX = parseInt(positionX - 1);
        console.log(map[positionY][positionX]);
        break;
      case "R":
        positionX = parseInt(positionX + 1);
        console.log(map[positionY][positionX]);
        break;
      default:
      // code
    }
    step++;
  }
});
