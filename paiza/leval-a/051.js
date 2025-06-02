process.stdin.resume();
process.stdin.setEncoding("utf8");
// 標準入力からデータを読み込むためのインターフェースを設定
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// グリッドの高さ、幅、グリッドデータ、DPテーブルを保持する変数
let height, width;
let grid = [];
let dp = [];

// 標準入力から1行ずつデータを読み込む
reader.on("line", (line) => {
  if (!height) {
    // 最初の行から高さと幅を取得
    [height, width] = line.split(" ").map(Number);
  } else {
    // 2行目以降はグリッドのデータとして保存
    grid.push(line.split(" ").map(Number));
  }
});

// すべての入力が完了したら処理を開始
reader.on("close", () => {
  // DPテーブルを初期化（高さ×幅の2次元配列）
  dp = Array(height)
    .fill()
    .map(() => Array(width).fill(0));

  // 最初の行の値をDPテーブルにコピー
  for (let j = 0; j < width; j++) {
    dp[0][j] = grid[0][j];
  }

  // 動的計画法で各マスの最大値を計算
  for (let i = 1; i < height; i++) {
    for (let j = 0; j < width; j++) {
      // 現在のマスに到達できる3つの経路を考慮
      // 1. 直下から来る場合
      let maxVal = dp[i - 1][j];

      // 2. 左斜め下から来る場合（存在しない場合は0）
      const left = dp[i - 1][j - 1] || 0;
      maxVal = Math.max(maxVal, left);

      // 3. 右斜め下から来る場合（存在しない場合は0）
      const right = dp[i - 1][j + 1] || 0;
      maxVal = Math.max(maxVal, right);

      // 現在のマスの値と、これまでの最大値を足し合わせる
      dp[i][j] = maxVal + grid[i][j];
    }
  }

  // 最後の行の最大値を出力（これが求める答え）
  const result = Math.max(...dp[height - 1]);
  console.log(result);
});
