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

    const answer1 = document.getElementById("input1").value.toLowerCase();
    const answer2 = document.querySelector("input[name='question#2']:checked").value;
    const answer3 = document.querySelector("input[name='question#3']:checked").value;
    const answer4 = document.querySelector("input[name='question#4']:checked").value
    const answer5 = document.querySelector("input[name='question#5']:checked").value

    if (answer1 === "c#") {
      c.removeAttribute("class");
    } else if  (answer1 === "python") {
      python.removeAttribute("class");
    } else if (answer1 === "javascript") {
      javascript.removeAttribute("class")
    }

  };
};
