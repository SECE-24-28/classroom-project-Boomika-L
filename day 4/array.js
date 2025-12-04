// question 1
console.log("1.creating an array");
const createArray = (arg1,arg2,arg3)=>
{
    let arr = [arg1,arg2,arg3];
    return arr;
}
let arr = createArray(1,2,3);
for(let i=0;i<3;i++)
{
    console.log(arr[i]);
}
//question 2
console.log("2 print only the strings");
let stringOnly = (arg1,arg2,arg3)=>
{
    let arr = [arg1,arg2,arg3];
    for(let i=0;i<3;i++)
    {
        if( typeof arr[i] == "string")
        {
            console.log(arr[i]);
        }
    }
}
stringOnly(1,"one",2);
//question 3 [array of squares]
console.log("3.array of squares");
function arrayOfSquares(a,b,c){
    let arr3 = [ a*a,b*b,c*c];
    return arr3;
}
let arr2 = arrayOfSquares(1,2,3);
for(let i=0;i<3;i++)
{
    console.log(`${arr2[i]}`);
}
//question 4 Filter Even Numbers
console.log("4.filter even numbers only");
const FilterEvenNumbers = (...args)=>{
   
    args.forEach(element => {
        if(element %2==0)
        {
            console.log(element);
        }
        
    });
    
}
FilterEvenNumbers(1,2,4);
// question 5 [Array of names]
console.log("5. array of names");
const collectNames = (...args)=>{
  let arr5 =[];
  args.forEach(element =>{
     let val = element.toUpperCase();
     arr5.push(val);
  })
  return arr5;
}
let temp = collectNames("boomi","hema","bhavi");
for(let i=0;i<3;i++)
{
  console.log(temp[i]);
}
// filter [print only odd numbers]
let a = [1,2,3,4,5,6,7,8,9];
let b = a.filter((e,index)=>{
    return  index%2 == 1;
})
console.log(b);


