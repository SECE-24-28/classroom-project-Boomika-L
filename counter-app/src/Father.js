import Son from "./Son"
const Father = ({b}) => {
    return(
        <div>
            <h2>Father component</h2>
            <Son c = {b}></Son>
        </div>
       
    );
};
export default Father;