const SUBJECTS = {
  Mathematics: 14,
  Science: 13,
  "Social Science": 25,
  English: 28,
  Hindi: 17,
  "Information Technology": 15,
};
const KEY = "class10hub_v3";
const defaultState = {
  completed: {},
  quizAttempts: 0,
  mockCompleted: [],
  scores: [],
  theme: "light",
  size: "normal",
  festival: "",
};
let state = load();
function load() {
  try {
    return {
      ...defaultState,
      ...JSON.parse(localStorage.getItem(KEY) || "{}"),
    };
  } catch {
    return { ...defaultState };
  }
}
function save() {
  localStorage.setItem(KEY, JSON.stringify(state));
  renderProgress();
}
function chapterCount(s) {
  return SUBJECTS[s] || 0;
}
function chapterNames(s) {
  const n = chapterCount(s);
  return Array.from({ length: n }, (_, i) => `${s} — Chapter ${i + 1}`);
}
function pct(n, d) {
  return d ? Math.round((n / d) * 100) : 0;
}
function subjectPct(s) {
  const done = Object.keys(state.completed).filter((k) =>
    k.startsWith(s + "::")
  ).length;
  return pct(done, chapterCount(s));
}
function overallPct() {
  const values = Object.keys(SUBJECTS).map(subjectPct);
  return values.length
    ? Math.round(values.reduce((a, b) => a + b, 0) / values.length)
    : 0;
}
function averageScore() {
  return state.scores.length
    ? Math.round(state.scores.reduce((a, b) => a + b, 0) / state.scores.length)
    : 0;
}

const $ = (id) => document.getElementById(id);
const $$ = (q) => [...document.querySelectorAll(q)];
function openView(id) {
  $$(".view").forEach((v) => v.classList.toggle("active", v.id === id));
  $$(".nav").forEach((n) =>
    n.classList.toggle("active", n.dataset.view === id)
  );
  if (innerWidth <= 760) $("sidebar").classList.remove("open");
  scrollTo({ top: 0, behavior: "smooth" });
}
$$(".nav").forEach((n) => (n.onclick = () => openView(n.dataset.view)));
$$("[data-open]").forEach((c) => (c.onclick = () => openView(c.dataset.open)));
$("menuBtn").onclick = () => $("sidebar").classList.toggle("open");
function theme(mode) {
  document.body.classList.toggle("dark", mode === "dark");
  state.theme = mode;
  save();
}
$("lightBtn").onclick = () => theme("light");
$("darkBtn").onclick = () => theme("dark");
$("sLight").onclick = () => theme("light");
$("sDark").onclick = () => theme("dark");

function fillSubjects(select) {
  select.innerHTML =
    '<option value="">Select Subject</option>' +
    Object.keys(SUBJECTS)
      .map((s) => `<option>${s}</option>`)
      .join("");
}
function fillChapters(subjectSelect, chapterSelect) {
  const s = subjectSelect.value;
  chapterSelect.innerHTML =
    '<option value="">Select Chapter</option>' +
    chapterNames(s)
      .map((x, i) => `<option value="${i + 1}">${x}</option>`)
      .join("");
}
["info", "qa", "fc", "quiz"].forEach((prefix) => {
  fillSubjects($(prefix + "Subject"));
  $(prefix + "Subject").onchange = () =>
    fillChapters($(prefix + "Subject"), $(prefix + "Chapter"));
});
fillSubjects($("mockSubject"));

function renderQA() {
  const s = $("qaSubject").value,
    c = $("qaChapter").value;
  if (!s || !c) {
    $("qaList").innerHTML =
      '<div class="image-preview">📝<b>Select subject and chapter.</b></div>';
    return;
  }
  const tab = document.querySelector(".tabs .selected").dataset.tab;
  const counts = { very: 12, short: 8, long: 4 };
  const count = counts[tab];
  $("qaList").innerHTML = Array.from({ length: count }, (_, i) => {
    const words = tab === "very" ? 20 : tab === "short" ? 45 : 90;
    return `<article class="qa"><h3>${i + 1}. Important ${ tab === "very" ? "Very Short" : tab === "short" ? "Short" : "Long" } Question — ${s}, Chapter ${c}</h3><p><b>Answer:</b> This answer area is structured for an exam-oriented response of at least ${words} words. Replace this generated template with the verified chapter content before publishing.</p></article>`;
  }).join("");
}
$("qaSubject").onchange = () => {
  fillChapters($("qaSubject"), $("qaChapter"));
  renderQA();
};
$("qaChapter").onchange = renderQA;
$$(".tabs button").forEach(
  (b) =>
    (b.onclick = () => {
      $$(".tabs button").forEach((x) => x.classList.remove("selected"));
      b.classList.add("selected");
      renderQA();
    })
);
$("chapterDone").onclick = () => {
  const s = $("qaSubject").value,
    c = $("qaChapter").value;
  if (!s || !c) return alert("Select subject and chapter first.");
  state.completed[`${s}::${c}`] = true;
  save();
  alert("Chapter marked completed.");
};
function updateFlash() {
  const s = $("fcSubject").value,
    c = $("fcChapter").value;
  const front = document.querySelector(".flash .front"),
    back = document.querySelector(".flash .back");
  if (!s || !c) {
    front.innerHTML = "Select a chapter<small>Tap to flip</small>";
    back.innerHTML = "Your answer appears here.<small>Tap to flip back</small>";
    return;
  }
  front.innerHTML = `${s} — Chapter ${c}: Quick Revision Question<small>Tap to flip</small>`;
  back.innerHTML = `Key concept / answer for ${s}, Chapter ${c}.<small>Tap to flip back</small>`;
}
$("fcSubject").onchange = () => {
  fillChapters($("fcSubject"), $("fcChapter"));
  updateFlash();
};
$("fcChapter").onchange = updateFlash;
$("flashcard").onclick = () => $("flashcard").classList.toggle("flipped");

const bank = Array.from({ length: 25 }, (_, i) => ({
  q: `${ i + 1 }. Which option is the correct answer for this chapter practice question?`,
  o: ["Option A — correct concept", "Option B", "Option C", "Option D"],
  a: 0,
}));
const mockBank = Array.from({ length: 80 }, (_, i) => ({
  q: `${i + 1}. Which option best answers this full-subject mock question?`,
  o: ["Option A — correct concept", "Option B", "Option C", "Option D"],
  a: 0,
}));
let test = null,
  timer = null;

function startTest(type) {
  const subject =
    type === "quiz" ? $("quizSubject").value : $("mockSubject").value;
  if (!subject) return alert("Select a subject first.");
  if (type === "quiz" && !$("quizChapter").value)
    return alert("Select a chapter first.");
  const questions = type === "quiz" ? bank : mockBank;
  test = {
    type,
    subject,
    index: 0,
    answers: Array(questions.length).fill(null),
    questions,
  };
  if (type === "quiz") {
    $("quizSetup").classList.add("hidden");
    $("quizRun").classList.remove("hidden");
    $("quizResult").classList.add("hidden");
  } else {
    $("mockSetup").classList.add("hidden");
    $("mockRun").classList.remove("hidden");
    $("mockResult").classList.add("hidden");
  }
  startTimer(type === "quiz" ? 300 : 1800);
  renderQuestion();
}
function startTimer(seconds) {
  clearInterval(timer);
  let left = seconds;
  const el = () => (test.type === "quiz" ? $("quizTimer") : $("mockTimer"));
  const tick = () => {
    el().textContent = `${String(Math.floor(left / 60)).padStart( 2, "0" )}:${String(left % 60).padStart(2, "0")}`;
    if (left <= 0) {
      clearInterval(timer);
      finishTest();
    }
    left--;
  };
  tick();
  timer = setInterval(tick, 1000);
  }
function renderQuestion() {
  const t = test,
    q = t.questions[t.index],
    prefix = t.type === "quiz" ? "quiz" : "mock";
  $(`${prefix}No`).textContent = `Question ${t.index + 1} / ${ t.questions.length }`;
  $(`${prefix}Question`).innerHTML = `<div class="question">${q.q}</div>`;
  $(`${prefix}Options`).innerHTML = q.o
    .map(
      (o, i) =>
        `<button class="option ${ t.answers[t.index] === i ? "selected" : "" }" data-i="${i}">${String.fromCharCode(65 + i)}. ${o}</button>`
    )
    .join("");
  $$(`#${prefix}Options .option`).forEach(
    (b) => (b.onclick = () => choose(+b.dataset.i))
  );
  $(`${prefix}Next`).textContent =
    t.index === t.questions.length - 1 ? "Submit" : "Next";
}
function choose(i) {
  if (test.answers[test.index] !== null) return;
  test.answers[test.index] = i;
  renderQuestion();
  const prefix = test.type === "quiz" ? "quiz" : "mock",
    q = test.questions[test.index];
  const opts = $$(`#${prefix}Options .option`);
  opts[i].classList.add(i === q.a ? "correct" : "wrong");
}
function nextQuestion() {
  if (test.answers[test.index] === null)
    return alert("Please attempt this question first.");
  if (test.index === test.questions.length - 1) finishTest();
  else {
    test.index++;
    renderQuestion();
  }
}
$("startQuiz").onclick = () => startTest("quiz");
$("quizNext").onclick = nextQuestion;
$("startMock").onclick = () => startTest("mock");
$("mockNext").onclick = nextQuestion;

function finishTest() {
  if (!test) return;
  clearInterval(timer);
  const correct = test.answers.reduce(
    (n, a, i) => n + (a === test.questions[i].a ? 1 : 0),
    0
  );
  const score = pct(correct, test.questions.length);
  state.scores.push(score);
  if (test.type === "quiz") {
    state.quizAttempts++;
    showResult("quiz", correct, test.questions.length, score);
  } else {
    if (!state.mockCompleted.includes(test.subject))
      state.mockCompleted.push(test.subject);
    showResult("mock", correct, test.questions.length, score);
  }
  save();
}
function showResult(type, correct, total, score) {
  const setup = $(type + "Setup"),
    run = $(type + "Run"),
    result = $(type + "Result");
  setup.classList.add("hidden");
  run.classList.add("hidden");
  result.classList.remove("hidden");
  result.innerHTML = `<h2>Test Completed 🎉</h2><p><b>${correct}</b> correct out of <b>${total}</b></p><h1>${score}%</h1><button class="primary" onclick="location.reload()">Back to Dashboard</button>`;
}
function renderProgress() {
  const vals = Object.keys(SUBJECTS).map((s) => subjectPct(s));
  $("overall").textContent = overallPct() + "%";
  $("quizCount").textContent = state.quizAttempts;
  $("mockCount").textContent = state.mockCompleted.length + "/6";
  $("avgScore").textContent = averageScore() + "%";
  $("subjectProgress").innerHTML = Object.keys(SUBJECTS)
    .map((s) => {
      const p = subjectPct(s);
      return `<div class="subject"><b>${s} <strong>${p}%</strong></b><div class="track"><em style="width:${p}%"></em></div></div>`;
    })
    .join("");
  const full = $("fullProgress");
  if (full)
    full.innerHTML = `<div class="progress"><div class="progress-title"><div><i>07</i><div><h2>Your Progress</h2><p>Automatically calculated from completed chapters, quiz attempts and mock tests.</p></div></div></div><div class="progress-body"><div class="donut"><div><strong>${overallPct()}%</strong><small>Overall Progress</small></div></div><div class="subjects">${Object.keys( SUBJECTS ) .map( (s) => `<div class="subject"><b>${s} <strong>${subjectPct( s )}%</strong></b><div class="track"><em style="width:${subjectPct( s )}%"></em></div></div>` ) .join( "" )}</div></div><div class="stats"><div>📘 <span>Quizzes Attempted<strong>${ state.quizAttempts }</strong></span></div><div>📄 <span>Mock Tests Taken<strong>${ state.mockCompleted.length }/6</strong></span></div><div>🏆 <span>Average Score<strong>${averageScore()}%</strong></span></div></div></div>`;
}
renderProgress();

function setSize(s) {
  document.body.classList.remove("text-large", "text-xl");
  if (s === "large") document.body.classList.add("text-large");
  if (s === "xl") document.body.classList.add("text-xl");
  state.size = s;
  save();
}
$$("[data-size]").forEach((b) => (b.onclick = () => setSize(b.dataset.size)));
$("clear").onclick = () => {
  if (
    confirm(
      "This will erase all saved progress, attempts, scores and settings. Continue?"
    )
  ) {
    localStorage.removeItem(KEY);
    location.reload();
  }
};
$("diwali").onclick = () => {
  document.body.classList.toggle("diwali");
  document.body.classList.remove("christmas");
  state.festival = document.body.classList.contains("diwali") ? "diwali" : "";
  save();
};
$("christmas").onclick = () => {
  document.body.classList.toggle("christmas");
  document.body.classList.remove("diwali");
  state.festival = document.body.classList.contains("christmas")
    ? "christmas"
    : "";
  save();
};

function game(name) {
  const a = $("gameArea");
  a.classList.remove("hidden");
  if (name === "ttt") {
    a.innerHTML = `<h3>Tic-Tac-Toe</h3><div id="board" style="display:grid;grid-template-columns:repeat(3,70px);justify-content:center;gap:5px"></div><p id="gmsg">Your turn: X</p>`;
    let b = Array(9).fill(""),
      turn = "X";
    for (let i = 0; i < 9; i++) {
      let x = document.createElement("button");
      x.style.height = "70px";
      x.textContent = "";
      x.onclick = () => {
        if (b[i] || turn !== "X") return;
        b[i] = "X";
        x.textContent = "X";
        let win = checkWin(b);
        if (win || b.every(Boolean)) {
          $("gmsg").textContent = win ? "You win! 🎉" : "Draw!";
          return;
        }
        turn = "O";
        setTimeout(() => {
          let free = b.map((v, j) => (v ? null : j)).filter((v) => v !== null);
          if (!free.length) return;
          let j = free[Math.floor(Math.random() * free.length)];
          b[j] = "O";
          document.querySelectorAll("#board button")[j].textContent = "O";
          turn = "X";
          if (checkWin(b)) $("gmsg").textContent = "Computer wins!";
        }, 250);
      };
      $("board").appendChild(x);
    }
}
  }
  if (name === "number") {
    let n = Math.floor(Math.random() * 20) + 1;
    a.innerHTML = `<h3>Number Guess</h3><p>Guess a number from 1–20.</p><input id="guess" type="number" min="1" max="20"><button onclick="guessNum(${n})">Guess</button><p id="gmsg"></p>`;
  }
  if (name === "click") {
    a.innerHTML = `<h3>Speed Click</h3><p>Click the button as many times as possible in 5 seconds.</p><button id="clicker">Start</button><h2 id="clickScore">0</h2>`;
    let c = 0,
      t;
    $("#clicker").onclick = () => {
      if (t) return;
      c = 0;
      $("#clicker").textContent = "CLICK!";
      $("#clicker").onclick = () => {
        $("#clickScore").textContent = ++c;
      };
      t = setTimeout(() => {
        alert("Score: " + c);
        t = null;
      }, 5000);
    };
  }
  if (name === "rps") {
    a.innerHTML = `<h3>Rock Paper Scissors</h3>${["Rock", "Paper", "Scissors"] .map((x) => `<button onclick="rps('${x}')">${x}</button>`) .join("")}<p id="gmsg"></p>`;
  }
  if (name === "dice") {
    a.innerHTML = `<h3>Dice Challenge</h3><button onclick="dice()">Roll Dice 🎲</button><h2 id="diceOut">—</h2>`;
  }
  if (name === "reaction") {
    a.innerHTML = `<h3>Reaction Test</h3><button id="react">Wait...</button><p id="gmsg"></p>`;
    setTimeout(() => {
      let t = performance.now();
      $("#react").textContent = "CLICK!";
      $("#react").onclick = () => {
        $("#gmsg").textContent = Math.round(performance.now() - t) + " ms";
      };
    }, 1000 + Math.random() * 2500);
  }
  if (name === "memory") {
    a.innerHTML = `<h3>Memory Match</h3><p>Match the pairs.</p><div id="mem" style="display:grid;grid-template-columns:repeat(4,55px);gap:7px;justify-content:center"></div>`;
    let vals = ["🍎", "🍎", "🚀", "🚀", "⭐", "⭐", "🎵", "🎵"].sort(
        () => Math.random() - 0.5
      ),
      open = [];
    vals.forEach((v, i) => {
      let b = document.createElement("button");
      b.textContent = "❓";
      b.style.height = "55px";
      b.onclick = () => {
        if (open.length >= 2 || b.textContent !== "❓") return;
        b.textContent = v;
        open.push({ i, b, v });
        if (open.length === 2) {
          setTimeout(() => {
            if (open[0].v !== open[1].v) {
              open[0].b.textContent = "❓";
              open[1].b.textContent = "❓";
            }
            open = [];
          }, 500);
        }
      };
      $("mem").appendChild(b);
    });
  }
}
function checkWin(b) {
  return [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ].some((x) => b[x[0]] && b[x[0]] === b[x[1]] && b[x[1]] === b[x[2]]);
}
window.guessNum = (n) => {
  let g = +document.getElementById("guess").value;
  document.getElementById("gmsg").textContent =
    g === n ? "Correct! 🎉" : g < n ? "Too low" : "Too high";
};
window.rps = (p) => {
  let c = ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)],
    w =
      p === c
        ? "Draw"
        : (p === "Rock" && c === "Scissors") ||
          (p === "Paper" && c === "Rock") ||
          (p === "Scissors" && c === "Paper")
        ? "You win!"
        : "Computer wins!";
  document.getElementById(
    "gmsg"
  ).textContent = `You: ${p} • Computer: ${c} • ${w}`;
};
window.dice = () =>
  (document.getElementById("diceOut").textContent =
    Math.floor(Math.random() * 6) + 1);
$$(".game").forEach((g) => (g.onclick = () => game(g.dataset.game)));
theme(state.theme);
setSize(state.size);
if (state.festival === "diwali") document.body.classList.add("diwali");
if (state.festival === "christmas") document.body.classList.add("christmas");
