// 특정 요소를 ID로 선택하기
// ------------------------------------------

// 'my-number'라는 ID를 가진 태그를 선택
const myNumberTag = document.getElementById("my-number");
console.log("Selected element:", myNumberTag);
// 출력: <div id="my-number">0</div>

// ------------------------------------------

// ID가 'btns'인 태그를 선택하고 내부 확인
const btnsTag = document.getElementById("btns");
console.log("Selected element:", btnsTag);
// 출력: <div id="btns">...</div> (내부에 포함된 모든 요소 포함)

// ------------------------------------------

// 존재하지 않는 ID를 선택했을 때
const nonexistentTag = document.getElementById("nonexistent");
console.log("Result for nonexistent ID:", nonexistentTag);
// 출력: null (존재하지 않는 ID를 선택하면 null 반환)

// ------------------------------------------

// 선택된 요소를 활용: 값 또는 속성 변경
const increaseButton = document.getElementById("increase");
console.log("Increase Button:", increaseButton);
// 출력: <button id="increase">+</button>
