// HTML 요소 선택
const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");

let mouseoverCount = 0;
let mouseenterCount = 0;

// mouseover 이벤트 핸들러
box1.addEventListener("mouseover", () => {
  mouseoverCount++;
  const msg = `mouseover event count: ${mouseoverCount}`;
  box1.querySelector(".title").textContent = msg;
  console.log("mouseover 발생!"); // 콘솔에 이벤트 발생 로그
});

// mouseenter 이벤트 핸들러
box2.addEventListener("mouseenter", () => {
  mouseenterCount++;
  const msg = `mouseenter event count: ${mouseenterCount}`;
  box2.querySelector(".title").textContent = msg;
  console.log("mouseenter 발생!"); // 콘솔에 이벤트 발생 로그
});
