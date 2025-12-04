//  console.log(a);
//  var a=10;
//  console.log(a);
//  let b=10;
//  console.log(b);
//  {
//     let b=30;
//     console.log(b);
//  }
//  console.log(b);


// functions
// 1.Named Function
// function namedfunction() {
//   console.log("named function called");
// }
// namedfunction();
// //2.function expression
// let fune=function()
// {
//     console.log("function expression");
// }
// fune();
// // 3.Arrow function
// let arrow = ()=>{
//     console.log("arrow function called");
// }
// arrow();
// //4.callback and IIFE
// (
//     ()=>{
//         console.log("call back and IIFE called");
//     }
// )();

// 1.function for adding two numbers
const addfunction =(para1,para2)=>{
   let a = para1;
   let b= para2;
   sum= a+b;

   console.log("The sum of two numbers",sum);


}
addfunction(10,20);
addfunction(3,5);

// 2.template litral
const addfunction1 =(para1,para2)=>{
   let a = para1;
   let b= para2;
   sum= a+b;

   console.log(`The sum of ${a} and ${b} is ${sum}`);



}
addfunction1(10,20);
addfunction1(3,5);
 var a;
 console.log(typeof a);


 //arrays
 let arr=[1,2,3,4,5]
console.log(arr)

//for loop
for(let i=0;i<arr.length;i++)
{
console.log(arr[i])
}

//ForEach
arr.forEach((element,index)=>{
    console.log(element,index);
})

//Map
let arr2=[1,2,3,4,5]
let aa=arr.map((ele,ind)=>ele+ind)
console.log(arr);