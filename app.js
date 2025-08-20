 let board 

 let turn

 let bomb = false

 let circleIndex

const circles = Array.from(document.querySelectorAll(".circle"));

const messages = document.querySelector('#message');

const resetBtn = document.getElementById('reset');

const gameBoard = document.querySelector(".board")

function init() {
  console.log("Ready, Set, Kaboom!");

  board = ["", "", "", "",
           "", "", "", "", 
           "", "", "", "", 
           "", "", "", ""];

  turn = "Player1";
  bomb = false;
  
  render(); 
}


function reset () {
    init()
   unshakey()
    board.forEach((value,index) => {
circles[index].textContent = ""
circles[index].classList.remove("animate__animated","animate__heartBeat")
    })
} 

function updateBoard() {
  board.forEach((value, index) => {
    console.log(value)
    circles[index].style.backgroundColor = value ? "red" : "";
    if (bomb) {
    circles[circleIndex].textContent = "💣" 
    }
    if (!bomb) {
        circles[circleIndex]?.classList.add("animate__animated","animate__heartBeat")
    }
    // add if statement if bomb make textcontent bomb emoji 
    // classListAdd if no bomb add classlist of heart beat
  });
}

// add inside if statement- add classlist to do jello shakey 
function updateMessage() {
  if (bomb) {
    messages.textContent = "💣 Kaboom!🔥You lost😒"; 
    shakey()
  }  else {
    messages.textContent =`It's ${turn}'s turn`;
  }
}


function handleClick(event) {
   circleIndex = circles.indexOf(event.target);

  if (board[circleIndex] || bomb) return;

  placePiece(circleIndex);

  if (!bomb) {
    switchPlayerTurn();
  } 

  render();
}



circles.forEach(circle => circle.addEventListener("click", handleClick));
resetBtn.addEventListener("click", reset) 


function switchPlayerTurn() {
  turn = turn === "Player1" ? "Player2" : "Player1";
}
function placePiece(index) {
  board[index] = true; 

  if (Math.random() <= 0.35) {
    bomb = true;
  }
}

function shakey() {
    gameBoard.classList.add("animate__animated","animate__jello")
    //console.log(shakey)
}

function unshakey () {
    gameBoard.classList.remove("animate__animated","animate__jello", )
    
}


function render() {
  updateBoard();
  updateMessage();

}

init()