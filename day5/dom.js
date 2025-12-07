// // tag selector
// let tg = document.getElementsByTagName("h1");
// //html collection array
// console.log(tg[0]);
// //class selector
// let cls = document.getElementsByClassName("a")
// console.log(cls[0]);
// //Id selector
// let idd = document.getElementById("b");
// console.log(idd);
// //query selector
// let qu=document.querySelector(".intro");
// console.log(qu);
// //query selector all
// let all = document.querySelectorAll("#c");
// //node list array
// console.log(all[0]);

//read and write opertaions
// text content for content part only
//inner html for tag insertion or writing

// read operation
// let head = document.querySelector(".intro");
// console.log(head.textContent);
// head.textContent="hello from query selector";
// //write operation
// let  wr = document.querySelector(".div");
// wr.innerHTML = " <h1>tag selector3</h1>"
// console.log(wr.innerHTML);

//add,remove,toggle = add /remove
// let ad = document.querySelector("h1")
// ad.classList.add("color");
//remove
// let re = document.querySelector("h1");
// re.remove("color");
// toggle
// let to = document.querySelector("h1")
// ad.classList.toggle("background");

// styling
// let st = document.querySelector("p")
// st.style.color ="aqua";
// st.style.backgroundColor ="black";
// why we use css in js means because inline css has higher priority

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.querySelectorAll("input")[0];
  let feedback = document.querySelectorAll("input")[1];
  if (name.value === "") {
    alert("name filed is required");
    return;
  }
  if (feedback.value.length < 5) {
    alert("feedback is minimum 5 characters required");
    return;
  }
  let result = document.querySelector("#result");
  result.textContent = `thankyou ${name.value} for your feedback`;
  form.reset();
});
