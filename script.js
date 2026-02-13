function startQuiz() {
  const name = document.getElementById("username").value;
  
  if(name === "") {
    alert("Please enter your name 💕");
  } else {
    localStorage.setItem("username", name);
    window.location.href = "quiz.html";
  }
}
