/**
 * [input 태그 다루기]
 *
 * > 포커스 이벤트
 * focusin: 요소에 포커스가 되었을 때
 * focusout: 요소에 포커스가 빠져나갈 때
 * focus: 요소에 포커스가 되었을 때 (버블링 x)
 * blur: 요소에 포커스가 빠져나갈 때 (버블링 x)
 *
 * > 입력 이벤트
 * input: 사용자가 입력을 할 때
 * change: 요소의 값이 변했을 때
 */

// 폼 요소 및 로그 영역 선택
const form = document.querySelector("#form");
const log = document.querySelector("#event-log");

// 로그 메시지 추가 함수
function addLogMessage(message) {
  const logItem = document.createElement("li");
  logItem.textContent = message;
  log.appendChild(logItem);
}

// 이벤트 핸들러 함수
function printEventType(e) {
  const { type, target } = e;
  console.log("type:", type);
  console.log("target:", target);

  // 이벤트 로그 추가
  addLogMessage(
    `[${type}] target: ${target.id}, value: ${target.value || "없음"}`
  );
}

// 이벤트 리스너 등록
form.addEventListener("focusin", printEventType); // 포커스 인
form.addEventListener("focusout", printEventType); // 포커스 아웃
form.addEventListener("input", printEventType); // 입력
form.addEventListener("change", printEventType); // 값 변경
