window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
  event.preventDefault();
  let c = document.getElementById("c");
  c.setAttribute("class", "hidden");
  let python = document.getElementById("Python");
  python.setAttribute("class", "hidden");

  
  // getting user input value
  const answer1 = document.getElementById("input1").value.toLowerCase();





  if (answer1 === "c") {
    c.removeAttribute("class");
  } else if  (answer1 === "Python") {
    python.removeAttribute("class");
  } else if (answer1 === "Javascript") {
    javaScript.removeAttribute("class")
  }
  }
}
