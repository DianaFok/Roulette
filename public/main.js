//Worked with mentor, Laura

let number = 0;
let color = 0;
let wins = 0;
let losses = 0;

document.querySelector('button').addEventListener('click', () => {
  event.preventDefault();

  let chosenNum = document.getElementById("game");
  let chosenCol = document.querySelector(".colors");

  const num = document.querySelector("#num");
  const col = document.querySelector("#col");

  let winningNum = Math.floor(Math.random()* chosenNum.length)
  let winningCol;

  if (winningNum % 2 === 0) {
    winningCol = 'red'
  }else{
    winningCol = 'black'
  }

  document.querySelector("#randomNum").innerHTML = winningNum
  document.querySelector("#randomCol").innerHTML = winningCol

  if((chosenNum.value === winningNum)){
    number += num.value * 10
    wins+=1
  }else{
    losses+=1
  }

  if((chosenCol.value === winningCol)){
    color += col.value * 10
    wins+=1
  }else{
    losses+=1
  }

  let total = number + color

  document.querySelector("#total").innerHTML = "$" + total

  fetch('messages', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'wins': wins,
      'losses': losses,
      'total': total
    })
  })

  .then(response => {
    if (response.ok) return response.json()
  })
});
