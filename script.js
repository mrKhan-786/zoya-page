function goToQuestions() {
  showScreen("questions");
}

function showAnswer(type) {
  const messages = {
    self: `Tum bohot zyada sweet ho,
thodi innocent si, aur dil se bohot loyal.
Is complicated world me bhi tumhara heart simple aur pure hai 🌸💖` ,
    future: `Mehnat tum kar rahi ho
aur InshaAllah raaste khud bante jayenge.
CA banna mushkil hai, par tumhare liye mumkin hai ✨`,

    like: `You are hardworking and serious about your future and goals.
In a world where loyalty in relationships is becoming rare, valuing honesty and commitment is what truly makes someone different🌸💗.`,
    special: "Aba apa ka Secret mujhe kise pata hoga apa nai zayad kuch baat he nahi😂💗"
  };

  document.getElementById("answerText").innerText = messages[type];
  showScreen("answer");
}

function backToQuestions() {
  showScreen("questions");
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

function backToStart() {
  showScreen("start");
}







setInterval(() => {
  const el = document.createElement("div");
  el.className = "floating";
  el.innerText = Math.random() > 0.5 ? "🌸" : "💗";
  el.style.left = Math.random() * 85 + "vw";
  el.style.fontSize = (14 + Math.random() * 14) + "px";
  el.style.opacity = 0.35 + Math.random() * 0.35;
  el.style.animationDuration = 10 + Math.random() * 10 + "s";
  document.body.appendChild(el);

  setTimeout(() => el.remove(), 20000);
}, 700);

