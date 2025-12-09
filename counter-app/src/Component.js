 const Component = ()=>{
    return(
         <div>
            {/* //without div means only one tag is allowed  */}
      <h2>This is Component </h2>
      </div>
    );
};
//<> </> frame mates parent without name for wrapping two things
export default Component;//export default function
//named function
export const Component1 = (props)=>{
    
    //default name props we get a object
    return(
        <div>
      <h2>This is Component1 </h2>
      <h1>{props.q}</h1>
      </div>
    );
};
export const Component2 = ({a})=>{//instead or props we can give the variable used in component 
    return(
        <div>
      <h2>This is Component2 </h2>
      <h1>{a}</h1>
      </div>
    );
};
export const Component3 = ()=>{
    return(
      <div>
        <h2>This is Component3 </h2>
      </div>
    );
};
export const Component4 = ()=>{
    return(
      <div>
        <h2>This is Component4 </h2>
      </div>
    );
};
export const Component5 = ()=>{
    return(
      <div>
        <h2>This is Component5 </h2>
      </div>
    );
};
