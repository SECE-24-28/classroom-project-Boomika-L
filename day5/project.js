// 1 We need all the instance
let againBtn = document.querySelector(".again");
let number = document.querySelector(".number");
let guess = document.querySelector(".guess");
let checkBtn = document.querySelector(".check");
let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
let msg = document.querySelector(".message");

// 2. Generate a Random Number betwenn 1 and 20
let randomNumber = Math.trunc(Math.random() * 20) + 1;

// 2.1 creat a varible of score
let scr = 20;

// Button Functionalities
// 1.event  that we want to occur 2. Callback
checkBtn.addEventListener("click", () => {
  console.log("Button Clicked", randomNumber);
  console.log(randomNumber);
  let inputval = Number(guess.value);
  //3.1 input value equal to random number
  if(!inputval){
    alert("please enter the number");
    msg.textContent="No number"
  }
  else if (inputval == randomNumber) {
    //3.1.1 change background color to green
    document.body.style.backgroundColor = "green";
    //3.1.2 instead ? change to random value
    number.textContent = randomNumber;
    //3.1.3 at highest score put value of score
     if(scr > number(highScore.textContent)){
    highScore.textContent = scr;
    }
    //3.3.2 show message correct value
    msg.textContent = "Correct value";
  } else if (inputval > randomNumber) {
    //3.2 input greater than random number
    //3.2.1 decrease score by 1
    scr -= 1;
    highScore.textContent = scr;
    
    //3.2.2 show to high message
    msg.textContent = "Too high";
  } else if (inputval < randomNumber) {
    console.log("number is too low");
    //3.3 input less than random number
    //3.3.1 decrease score by 1
    scr -= 1;
    highScore.textContent = scr;
    //3.3.2 show message too low
    msg.textContent = "Too low";
  }
});

//again button function
let init = () => {
  scr = 20;
  scr.textContent = scr;
  number.textContent = "?";
  msg.textContent = "Start Guessing...";
  guess.value = "";
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.body.style.backgroundColor = "black";
};
// any helper function is there only reference willl be passed no function call init -> correct init() ->wrong
againBtn.addEventListener("click", init);
//3.1 input equal to random
