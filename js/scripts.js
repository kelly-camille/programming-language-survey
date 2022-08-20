window.addEventListener("load", function () {
  const form = document.getElementById("survey");
  form.addEventListener("submit", function (event) {
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
    const answer4 = document.querySelector("input[name='question#4']:checked").value;
    const answer5 = document.querySelector("input[name='question#5']:checked").value;
    console.log("answer2", answer2, "answer3", answer3, "answer4", answer4, "answer5", answer5)

    if (answer1 === "c#" && answer2 === "pink" && answer3 === "cat" && answer4 === "country" && answer5 === "sweet") {
      c.removeAttribute("class");
    } else if (answer1 === "c#" && answer2 === "green" && answer3 === "cow" && answer4 === "city" && answer5 === "savory") {
      python.removeAttribute("class");
    } else if (answer1 === "python" && answer2 === "green" && answer3 === "cat" && answer4 === "city" && answer5 === "savory") {
      javascript.removeAttribute("class");
    } else {
      python.removeAttribute("class");
    }
  });
  form.removeEventListener("submit", function () {
  });
});


