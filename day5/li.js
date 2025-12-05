//creating a list using js
let ul = document.createElement("ul");
let li1 = document.createElement("li")
li1.textContent="boomi";

ul.appendChild(li1);// only one item is added in list
let li2 = document.createElement("li")
li2.textContent="hema";

ul.appendChild(li2); //next element is added
document.body.appendChild(ul);
 let arr =["ragav","bhavi","dhanushya"];
 arr.forEach(element => {// using for each loop mulitiple contents were added single execution
    let lo = document.createElement("li");
    lo.textContent=element;
    ul.appendChild(lo);
 })
