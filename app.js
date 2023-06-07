const boxes = document.querySelectorAll(".box-cross");
let turn = "X";
let isgameover = false;
let score1=0;
let score2=0;
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

Array.from(boxes).forEach((element) => {
  let boxInput = element.querySelector(".box-input");
  element.addEventListener("click", () => {
    if (boxInput.innerText === "") {
      boxInput.innerText = turn;
      turn = changeTurn();
      checkWin();
      if (!isgameover) {
        if (turn == "X") {
          let player2 = document.getElementsByClassName("info")[1];
          player2.style.visibility = "hidden";
          let player1 = document.getElementsByClassName("info")[0];
          player1.style.visibility = "visible";
        } else {
          let player1 = document.getElementsByClassName("info")[0];
          player1.style.visibility = "hidden";
          let player2 = document.getElementsByClassName("info")[1];
          player2.style.visibility = "visible";
        }
      }
    }
  });
});

const checkWin = () => {
  let boxInput = document.getElementsByClassName("box-input");
  const resultArray=
  [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  resultArray.forEach(e=>{
    // console.log(e[0],e[1],e[2])
    if((boxInput[e[0]].innerText === boxInput[e[1]].innerText) && (boxInput[e[2]].innerText === boxInput[e[1]].innerText) && (boxInput[e[0]].innerText !== "") ){
      document.querySelectorAll('.info')[0].innerText = boxInput[e[0]].innerText + " Won";
      document.querySelectorAll('.info')[1].innerText = boxInput[e[0]].innerText + " Won";
      // console.log(boxInput[e[0]].innerText +"Won")
      isgameover = true;
      document.getElementById('gif').style.display='block';
      
      if(boxInput[e[0]].innerText=='X'){
        ++score1;
       document.getElementsByClassName('result-count')[0].innerText=score1;
      }
      else{
        ++score2;
        document.getElementsByClassName('result-count')[1].innerText=score2;
      }

  }
  })
};
const reset=document.getElementById('reset-btn');
reset.addEventListener('click',()=>{
  let boxInput = document.getElementsByClassName("box-input");
  Array.from(boxInput).forEach((e)=>{
    e.innerText="";
  });
  const urturn1=document.querySelectorAll('.info')[0];
  urturn1.setAttribute('class','info');
  urturn1.innerText="YOUR TURN!";
  const urturn2=document.querySelectorAll('.info')[1];
  urturn2.setAttribute('class','info')
  urturn2.innerText="YOUR TURN!";
  isgameover = false;
  // score1=0;
  // score2=0;
  document.getElementById('gif').style.display='none';
})