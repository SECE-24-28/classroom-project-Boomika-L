import Father from "./Father";
const Grandfather = ({a}) =>{
return(
    <div class="Container">
        <h2>Grandfather Component</h2>
        <Father b ={a}></Father>
    </div>
);

};
export default Grandfather;