// querySelector를 사용해 요소 선택하기
// ------------------------------------------

// id 선택
const myNumber = document.querySelector("#my-number");
console.log("Element with ID 'my-number':", myNumber);
// 출력: <div id="my-number">123</div>

// 클래스 선택 (첫 번째 요소만 반환)
const firstColorBtn = document.querySelector(".color-btn");
console.log("First element with class 'color-btn':", firstColorBtn);
// 출력: <div class="color-btn">Red</div>

// 태그 이름 선택
const firstDiv = document.querySelector("div");
console.log("First <div> element:", firstDiv);
// 출력: <div id="my-number">123</div>

// ------------------------------------------

// querySelectorAll을 사용해 여러 요소 선택하기
const allColorBtns = document.querySelectorAll(".color-btn");
console.log("All elements with class 'color-btn':", allColorBtns);
// 출력: NodeList(3) [div.color-btn, div.color-btn, div.color-btn]

// NodeList 순회하며 요소 출력
allColorBtns.forEach((btn) => {
  console.log("Color button element:", btn);
});
// 출력:
// <div class="color-btn">Red</div>
// <div class="color-btn">Blue</div>
// <div class="color-btn">Green</div>

// ------------------------------------------

// 태그 이름으로 여러 요소 선택
const allButtons = document.querySelectorAll("button");
console.log("All <button> elements:", allButtons);
// 출력: NodeList(2) [button, button]

// 첫 번째 버튼 텍스트 변경
allButtons[0].textContent = "Updated Button 1";
console.log("Updated first button:", allButtons[0]);
// 출력: <button>Updated Button 1</button>
