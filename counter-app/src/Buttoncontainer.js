const Buttoncontainer = ({incre,decre}) =>{
    return(
 <div className='buttons'>
        <button onClick ={incre} className='inc'>Increment</button>
        <button onClick = {decre} className='dec'>Decrement</button>
       </div>

    );
};
export default Buttoncontainer;