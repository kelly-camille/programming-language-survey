window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
  let c = document.getElementById("C#");
  c.setAttribute("class", "hidden");
  let python = document.getElementById("Python")
  python.setAttribute("class", "hidden");
  let javaScript = document.getElementByID("JavaScript");
  javaScript.setAttribute("class", "hidden");
  
  // getting user input value
  const answer1 = document.getElementById("input1").value;
  const answer2 = ducement.getElementByID("input2").value;
  const answer3 = document.getElementById("input3").value;
  const answer4 = document.getElementById("input4").value;
  const answer5 = document.getElementById("input5").value;








  if (answer1 === "C") {
    c.removeAttribute("class");
} else {
  (answer === "x")
  c.removeAttribute("class");
  }
}
}

