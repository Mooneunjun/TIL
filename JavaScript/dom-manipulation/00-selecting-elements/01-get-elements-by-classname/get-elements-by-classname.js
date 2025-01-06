// 클래스 이름으로 여러 요소 선택하기
// ------------------------------------------
const colorBtns = document.getElementsByClassName("color-btn");
console.log("Selected elements:", colorBtns);
// 출력: HTMLCollection(3) [div.red, div.blue, div.green]

// ------------------------------------------

// HTMLCollection의 특정 요소에 접근
console.log("First element:", colorBtns[0]); // <div class="color-btn red">Red</div>
console.log("Second element:", colorBtns[1]); // <div class="color-btn blue">Blue</div>

// ------------------------------------------

// HTMLCollection의 길이 확인
console.log("Number of elements:", colorBtns.length); // 3

// ------------------------------------------

// for...of 루프를 활용해 모든 요소 출력
for (const btn of colorBtns) {
  console.log("Element:", btn);
}
// 출력:
// <div class="color-btn red">Red</div>
// <div class="color-btn blue">Blue</div>
// <div class="color-btn green">Green</div>

// ------------------------------------------

// 존재하지 않는 클래스 이름으로 선택
const nonexistentElements = document.getElementsByClassName("nonexistent");
console.log("Nonexistent elements:", nonexistentElements); // HTMLCollection []
console.log("Length of nonexistent elements:", nonexistentElements.length); // 0
