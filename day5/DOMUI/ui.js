function changeText() {
  let tx = document.querySelector("#text");
  tx.textContent = "hello Welcome";
}
function changeColor() {
  let b = document.querySelector("#box");
  b.style.backgroundColor = "rgba(156, 212, 244, 1)";
}
let txt = document.querySelector("#itemInput");
 let ul = document.querySelector("#list");
function addItem() {
  let li = document.createElement("li");
  li.textContent = txt.value;
  ul.appendChild(li);
  document.container.appendChild(ul);
}
function hideBox(){
  let boxx = document.querySelector("#box");
  // savebox = boxx;
  //  boxx.remove();
  boxx.style.display="none" ;
}
function showBox()
{
  let boxx = document.querySelector("#box");

  boxx.style.display="block" ;
    // let c = document.querySelector(".container");
    // c.appendChild(savebox);
   
}