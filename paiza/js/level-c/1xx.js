let lines = [];

// 148
reader.on("close", () => {
  const array = lines[0].split(" ");
  const step = parseInt(array[0]);
  let level = parseInt(array[1]);
  for (let i = 0; i < step; i++) {
    const enemy = parseInt(lines[i + 1]);
    if (level > enemy) {
      level += Math.trunc(enemy / 2);
    } else if (level < enemy) {
      level = Math.trunc(level / 2);
    }
  }
  console.log(level);
});

// 166
reader.on("line", (line) => {
  let price = line;
  let coin = 500;
  let count = 0;
  while (price - coin !== 0) {
    if (price > coin) {
      price -= coin;
      count++;
    } else if (coin === 500) {
      coin = 100;
    } else if (coin === 100) {
      coin = 50;
    } else if (coin === 50) {
      coin = 10;
    } else if (coin === 10) {
      coin = 5;
    } else if (coin === 5) {
      coin = 1;
    }
  }
  count++;
  lines.push(count);
});
