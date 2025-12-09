// setTimeout(()=>{
//     console.log("settimeout called");
// },2000);
// console.log("hello world");
// setTimeout(()=>{
//     console.log("settimeout called1");
//     setTimeout(()=>{
//     console.log("settimeout called2");
//     setTimeout(()=>{
//     console.log("settimeout called3");
//     setTimeout(()=>{
//     console.log("settimeout called4");
//     setTimeout(()=>{
//     console.log("settimeout called5");
// },2000);
// },2000);

// },2000);
// },2000);
// },2000);
//promise using then catch
let mypromise = new Promise((res, rej) => {
  let marks = 40;
  if (marks >= 40) {
    console.log("student passed");
  } else {
    console.log("student failed");
  }
});
// mypromise
// .then((res) =>{
//     console.log("ok");
// })
// .catch((err)=>{
//     console.log("error");
// }

// )

// promise using async and await

let rans = async () => {
  try {
    let res = await mypromise;
    console.log("ok");
  } catch (err) {
    console.log("errpr");
  }
};
rans();
