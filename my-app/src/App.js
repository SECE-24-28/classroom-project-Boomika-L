// import { useState } from "react";
// import "./App.css";

// function App() {
//   let [randomnumber, setrandomnuumber] = useState(
//     Math.trunc(Math.random() * 20) + 1
//   );
//   let [msg, setmsg] = useState("Start Guessing ...");
//   let [score, setscore] = useState(20);
//   let [highscore, sethighscore] = useState(20);
//   let [bg, setbg] = useState("black");
//   let [guess, setguess] = useState("");
//   let checkbtn = () => {
//     let inputval = Number(guess);
//     if(!inputval){
//     setmsg("no number");
//     return;
//     }
//     else if(inputval === randomnumber){
//       setbg("green");
//       setmsg("correctvalue");
//       if(score > highscore)
//       {
//         sethighscore(score);
//       }
//     }
//     else if(inputval > randomnumber){
//       setscore(score -1);
//       setmsg("too high");
//     }
//     else if(inputval < randomnumber)
//     {
//       setscore(score-1);
//       setmsg("too low");
//     }
//   };
//   let init = () => {
//    setbg("black");
//    setscore(20);
//    setrandomnuumber(Math.trunc(Math.random()*20)+1);
//    setmsg("Start Guessing ...");
//   };
//   return (
//     <div className="App" style={{ backgroundColor: bg }}>
//       <header>
//         <h1>Guess My Number!</h1>
//         <p class="between">(Between 1 and 20)</p>
//         <button onclick={init} class="btn again">
//           Again!
//         </button>
//         <div class="number">{msg === "Correct Value" ? randomnumber : "?"}</div>
//       </header>
//       <main>
//         <section class="left">
//           <input
//             type="number"
//             class="guess"
//             value={guess}
//             onchange={(e) => setguess(e.target.value)}
//           />
//           <button onclick={checkbtn} class="btn check">
//             Check!
//           </button>
//         </section>
//         <section class="right">
//           <p class="message">{msg}</p>
//           <p class="label-score">
//             💯 Score: <span class="score">{score}</span>
//           </p>
//           <p class="label-highscore">
//             🥇 Highscore: <span class="highscore">{highscore}</span>
//           </p>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default App;
import "./App.css";
import { useState } from "react";
function App() {
  let [randomNumber, setRandomNuber] = useState(
    Math.trunc(Math.random() * 20) + 1
  );
  let [msg, setMsg] = useState("Start guessing...");
  let [score, setScore] = useState(20);
  let [highScore, setHighScore] = useState(0);
  let [bg, setBg] = useState("black");
  let [guess, setGuess] = useState("");

  let checkBtn = () => {
    let inputVal = Number(guess);
    if (!inputVal) {
      setMsg("No Number");
      return;
    }
    if (inputVal === randomNumber) {
      setBg("green");
      setMsg("Correct Value");
      if (score > highScore) {
        setHighScore(score);
      }
    } else if (inputVal > randomNumber) {
      setScore(score - 1);
      setMsg("Too High");
    } else if (inputVal < randomNumber) {
      setScore(score - 1);
      setMsg("Too Low");
    }
  };

  let init = () => {
    setBg("black");
    setScore(20);
    setRandomNuber(Math.trunc(Math.random() * 20) + 1);
    setMsg("Start guessing...");
  };

  return (
    <div className="App" style={{ backgroundColor: bg }}>
      <header>
        <h1>Guess My Number!</h1>
        <p class="between">(Between 1 and 20)</p>
        <button onClick={init} class="btn again">
          Again!
        </button>
        <div class="number">{msg === "Correct Value" ? randomNumber : "?"}</div>
      </header>
      <main>
        <section class="left">
          <input
            type="number"
            class="guess"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
          />
          <button onClick={checkBtn} class="btn check">
            Check!
          </button>
        </section>
        <section class="right">
          <p class="message">{msg}</p>
          <p class="label-score">
            💯 Score: <span class="score">{score}</span>
          </p>
          <p class="label-highscore">
            🥇 Highscore: <span class="highscore">{highScore}</span>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
