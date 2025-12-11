// 입력 필드 및 출력 영역 선택
const input = document.querySelector("#keyboard-input");
const eventTypeSpan = document.querySelector("#event-type");
const keySpan = document.querySelector("#key");
const codeSpan = document.querySelector("#code");

// 가상 키보드와 이벤트 버튼 선택
const keys = document.querySelectorAll(".key");
const eventButtons = {
  keydown: document.querySelector("#keydown"),
  keypress: document.querySelector("#keypress"),
  keyup: document.querySelector("#keyup"),
};

// 키보드 이벤트 핸들러
function handleKeyEvent(event) {
  // 출력 영역 업데이트
  eventTypeSpan.textContent = event.type;
  keySpan.textContent = event.key;
  codeSpan.textContent = event.code;

  // 가상 키보드에서 해당 키 강조
  const keyElement = document.getElementById(event.code);
  if (keyElement) {
    if (event.type === "keydown") {
      keyElement.classList.add("keydown-highlight");
    } else if (event.type === "keyup") {
      keyElement.classList.remove("keydown-highlight");
    }
  }

  // 이벤트 타입 버튼 강조
  if (event.type in eventButtons) {
    const button = eventButtons[event.type];
    button.classList.add("event-highlight");
    setTimeout(() => button.classList.remove("event-highlight"), 300);
  }

  // 콘솔 로그로 이벤트 정보 출력
  console.log(`Event Type: ${event.type}`);
  console.log(`Key: ${event.key}`);
  console.log(`Code: ${event.code}`);
}

// 모든 키의 초기화
function resetKeyboard() {
  keys.forEach((key) => {
    key.classList.remove("keydown-highlight");
  });
}

// 이벤트 리스너 등록
input.addEventListener("keydown", handleKeyEvent);
input.addEventListener("keypress", handleKeyEvent);
input.addEventListener("keyup", handleKeyEvent);

// 초기화 - 가상 키보드에서 모든 키의 강조 제거
document.addEventListener("DOMContentLoaded", resetKeyboard);
