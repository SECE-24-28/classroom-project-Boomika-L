import Grandson from "./Grandson";
const Son = ({c}) =>{
    return(
        <div>
            <h2>Son Component</h2>
            <Grandson d ={c}></Grandson>
        </div>
    );
}
export default Son;