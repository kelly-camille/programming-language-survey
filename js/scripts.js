//first question
window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
  event.preventDefault();
  let c = document.getElementById("c#");
  c.setAttribute("class", "hidden");
  let python = document.getElementById("python");
  python.setAttribute("class", "hidden");
  let javascript = document.getElementById("javascript");
  javascript.setAttribute("class", "hidden")
  // getting user input value
  const answer1 = document.getElementById("input1").value.toLowerCase();
 


//first question
  if (answer1 === "c#") {
    c.removeAttribute("class");
  } else if  (answer1 === "python") {
    python.removeAttribute("class");
  } else if (answer1 === "javascript") {
    javascript.removeAttribute("class")
  }
  }
}

