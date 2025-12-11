// import Component from "./Component";
// import {Component1,Component2,Component3,Component4,Component5} from "./Component"
// import Grandfather from './Grandfather';
import { useState } from 'react';
import Counter from "./Counter";
import './App.css'

function App() {
// // for ui modifications
// let[val,setVal] = useState(10);
//   // let msg ="hii good morning"
//   // let val = 0;
//   const incre = () =>{
//     // val = val+1;
//     setVal(val+1);
//     console.log("Increment button clicked",val);
//   };
//   const decre = () =>{
//     // val = val-1;
//     setVal(val-1);
//     console.log("decrement button clicked",val);
//   };

  return (
     <div className="App">
    

    
     <header>
        <h1>Guess My Number!</h1>
        <p class="between">(Between 1 and 20)</p>
        <button class="btn again">Again!</button>
        <div class="number">?</div>
    </header>
    <main>
        <section class="left">
            <input type="number" class="guess" />
            <button class="btn check">Check!</button>
        </section>
        <section class="right">
            <p class="message">Start guessing...</p>
            <p class="label-score">💯 Score: <span class="score">20</span></p>
            <p class="label-highscore">
                🥇 Highscore: <span class="highscore">0</span>
            </p>
        </section>
    </main>
    
    
    </div>
   
  )
}
//{/* // <h1>Learning a react</h1> */}
    // {/* <Component></Component>
    // <Component1 q ={msg}></Component1>
    // <Component2 a= {val}></Component2>
    // <Component3></Component3>
    // <Component4></Component4>
    // <Component5></Component5> */}
    //{/* // {/* <div className = "counter"> */}
    //{/* //    <h1>{val}</h1>
    //    <div className='buttons'>
    //     <button onClick ={incre} className='inc'>Increment</button>
    //     <button onClick = {decre} className='dec'>Decrement</button>
    //    </div>

    // </div> */
    // {/* <Grandfather a={msg}></Grandfather> */}
    // <Counter val ={val}
    // incre = {incre}
    // decre ={decre}></Counter>

export default App
// import "./App.css";
// import { useEffect, useState } from "react";
// import Counter from "./Counter";
// import TableRow from "./TableRow";

// function App() {
//   let [val, setVal] = useState(0);
//   // Step1
//   let [data, setData] = useState([]);
//   let [loading, setLoading] = useState(true);

//   let handleIncrement = () => {
//     setVal(val + 1);
//   };
//   let handleDecrement = () => {
//     setVal(val - 1);
//   };
//   // Debouncing
//   useEffect(() => {
//     if (val < 0) {
//       let timer = setTimeout(() => {
//         setVal(0);
//       }, 2000);

//       // cleanup Function
//       return () => {
//         clearTimeout(timer);
//       };
//     }
//   }, [val]);

//   useEffect(() => {
//     const FetchApi = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/users"
//         );
//         const jsonData = await response.json();
//         setData(jsonData);
//         setLoading(false);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     FetchApi();
//   }, []);

//   return (
//     <div className="App">
//       <h1>Learning React</h1>
//       <Counter
//         val={val}
//         handleDecrement={handleDecrement}
//         handleIncrement={handleIncrement}
//       ></Counter>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Contact</th>
//           </tr>
//         </thead>
//         <tbody>
//           {loading === true ? (
//             <tr>
//               <td className="aaa">Loading...</td>
//               <td className="aaa">Loading...</td>
//               <td className="aaa">Loading...</td>
//             </tr>
//           ) : (
//             data.map((item) => {
//               return <TableRow key={item.id} item={item} />;
//             })
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;

