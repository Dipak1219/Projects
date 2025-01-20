let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msg = document.querySelector(".msg");
let msgCon = document.querySelector(".msg-con");

let turn = true;
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("clicked");
    if (turn) {
      box.innerText = "X";
      turn = false;
    } else {
      box.innerText = "O";
      turn = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const enableBox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
  msgCon.classList.add("hide");
};

const disableBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const reset = () => {
  turn = true;
  enableBox();
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, winner is ${winner}`;
  msgCon.classList.remove("hide");
  disableBox();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 != "") {
      if (pos1 === pos2 && pos2 === pos3 && pos1 === pos3) {
        console.log("winner:" + pos1);
        showWinner(pos1);
      }
    }
  }
};

resetBtn.addEventListener("click", reset);
newBtn.addEventListener("click", reset);
