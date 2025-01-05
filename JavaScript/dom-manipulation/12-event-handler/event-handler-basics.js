// 요소 선택
const clickButton = document.getElementById("clickButton");
const hoverDiv = document.getElementById("hoverDiv");
const textInput = document.getElementById("textInput");

// 이벤트 핸들러 함수 정의
function handleClick() {
  alert("버튼이 클릭되었습니다!");
}

function handleMouseOver() {
  hoverDiv.style.backgroundColor = "lightblue"; // 마우스가 올라가면 배경색 변경
}

function handleMouseOut() {
  hoverDiv.style.backgroundColor = ""; // 마우스가 벗어나면 배경색 초기화
}

function handleInput(event) {
  console.log(`입력된 값: ${event.target.value}`); // 입력 값 출력
}

// 이벤트 리스너 등록
clickButton.addEventListener("click", handleClick); // 클릭 이벤트
hoverDiv.addEventListener("mouseover", handleMouseOver); // 마우스 오버 이벤트
hoverDiv.addEventListener("mouseout", handleMouseOut); // 마우스 아웃 이벤트
textInput.addEventListener("input", handleInput); // 입력 이벤트
