//ユーザーが値を入力する
// その値が数字や、特殊文字だとエラー
// 文字だった場合、全て大文字にする。
// その大文字を格納する。
// その大文字を格納し、最後の１文字を取得する
// 最後の１文字を表示する

// const input = document.getElementById("form").value;
// const textScreen = document.querySelector(".text__screen");

// document.addEventListener("input", () => {
//   textScreen.textContent = inputValue;
// });

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const input = document.getElementById("text");
  const output = document.getElementById("output");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    output.textContent = input.value;
    input.value = "";
  });
});
