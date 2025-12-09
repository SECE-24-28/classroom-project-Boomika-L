let nae = document.querySelector("#name");
let cou = document.querySelector("#course");
let rat = document.querySelector("#rating");
let feed = document.querySelector("#feedback");
let form = document.querySelector("#feedbackForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (nae.value === "") {
    alert("name field is required");
    return;
  }
  if (feed.value.length < 5) {
    alert("minimum 5 characters are required");
    return;
  }
  let out = document.querySelector("#output");
   out.style.display = "block";
//   out.textContent = `name : ${nae.value}  course :${cou.value} rating : ${rat.value}  feedback :${feed.value}`;
out.textContent = `name : ${nae.value} 
course : ${cou.value} 
rating : ${rat.value} 
feedback : ${feed.value}`;
  form.reset();
});
