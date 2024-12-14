// 버튼 선택
const myBtn = document.querySelector("#my-btn");

// 클릭 이벤트 핸들러 추가
myBtn.onclick = function () {
  console.log("Button was clicked!");
};

// ------------------------------------------

// HTML 태그에 직접 이벤트를 추가하는 방식의 예시 (비추천)
// 아래 코드는 참고용으로 작성된 내용입니다.
// <button id="my-btn" onclick="console.log('Button clicked!')">Click Me</button>

// ------------------------------------------

// 이벤트 처리 방식 비교
console.log("Event handling through JavaScript file is recommended.");
