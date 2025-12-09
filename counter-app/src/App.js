// import Component from "./Component";
// import {Component1,Component2,Component3,Component4,Component5} from "./Component"
// import Grandfather from './Grandfather';
import './App.css'

function App() {

  // let msg ="hii good morning"
  let val = 0;
  const incre = () =>{
    val = val+1;
    console.log("Increment button clicked",val);
  };
  const decre = () =>{
    val = val-1;
    console.log("decrement button clicked",val);
  };

  return (
    <div className="App">
    <h1>Learning a react</h1>
    {/* <Component></Component>
    <Component1 q ={msg}></Component1>
    <Component2 a= {val}></Component2>
    <Component3></Component3>
    <Component4></Component4>
    <Component5></Component5> */}
    <div className = "counter">
       <h1>{val}</h1>
       <div className='buttons'>
        <button onClick ={incre} className='inc'>Increment</button>
        <button onClick = {decre} className='dec'>Decrement</button>
       </div>

    </div>
    {/* <Grandfather a={msg}></Grandfather> */}

    
    
    
    </div>
  )
}

export default App
