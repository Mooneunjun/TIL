// 버튼 요소 선택
const button = document.querySelector("#button");

// 이벤트 핸들러 함수 정의
function handleClick1() {
  console.log("Event 1");
}

function handleClick2() {
  console.log("Event 2");
}

// 이벤트 핸들러 등록
button.addEventListener("click", handleClick1);
button.addEventListener("click", handleClick2);

// 이벤트 핸들러 제거
button.removeEventListener("click", handleClick2);
