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
  const answer2 = document.querySelector("input[name='question#2']:checked").value;
  const answer3 = document.querySelector("input[name='question#3']").value;
  const answer4 = document.getElementById("input4").value.toLowerCase();
  const answer5 = document.getElementById("input5").value.toLowerCase();
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
  
  
 
  
  



