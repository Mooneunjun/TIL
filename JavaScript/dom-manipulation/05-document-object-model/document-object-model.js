// DOM 객체 출력
console.log("Document Object:", document);

// DOM 객체의 자료형 확인
console.log("Type of document:", typeof document); // "object"

// DOM 객체를 프로퍼티 형태로 확인
console.dir(document);

// 특정 DOM 요소 선택
// id가 "title"인 요소 선택
const title = document.querySelector("#title");
console.log("Selected element:", title); // <h1 id="title">Welcome to DOM Manipulation</h1>

// DOM 요소의 프로퍼티 탐색
console.dir(title);

// DOM 요소의 스타일 변경
const changeStyleButton = document.querySelector("#change-style");

// 버튼 클릭 시 스타일 변경
changeStyleButton.onclick = function () {
  console.log("Before Style Change:", title.style);
  title.style.color = "red"; // 글자 색 변경
  title.style.backgroundColor = "yellow"; // 배경색 변경
  title.style.fontSize = "30px"; // 글자 크기 변경
  console.log("After Style Change:", title.style);
};
