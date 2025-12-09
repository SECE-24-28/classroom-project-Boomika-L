// import Component from "./Component";
// import {Component1,Component2,Component3,Component4,Component5} from "./Component"
import Grandfather from './Grandfather';
import './App.css'

function App() {

  let msg ="hii good morning"
  // let val = 21;
  return (
    <div className="App">
    <h1>Learning a react</h1>
    {/* <Component></Component>
    <Component1 q ={msg}></Component1>
    <Component2 a= {val}></Component2>
    <Component3></Component3>
    <Component4></Component4>
    <Component5></Component5> */}
    <Grandfather a={msg}></Grandfather>

    
    
    
    </div>
  )
}

export default App
