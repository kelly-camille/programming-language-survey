window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
  event.preventDefault();
  let c = document.getElementById("c");
  c.setAttribute("class", "hidden");
  let python = document.getElementById("python");
  python.setAttribute("class", "hidden");
  let javascript = document.getElementById("javascript");
  javascript.setAttribute("class", "hidden")
  // getting user input value
  const answer1 = document.getElementById("input1").value.toLowerCase();
  const answer2 = document.getElementById("input2").value.toLowerCase();
  const answer3 = document.getElementById("input3").value.toLowerCase();
  const answer4 = document.getElementById("input4").value.toLowerCase();
  const answer5 = document.getElementById("input5").value.toLowerCase();


  if (answer1 === "c") {
    c.removeAttribute("class");
  } else if  (answer1 === "python") {
    python.removeAttribute("class");
  } else if (answer1 === "javascript") {
    javascript.removeAttribute("class")
  }
  }
}
