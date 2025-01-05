// 타이머 변수: 이벤트 간 시간 차이를 계산하기 위해 사용
let timer = 0;

/**
 * 이벤트 유형을 출력하고 스타일을 업데이트하는 함수
 * @param {Event} e - 발생한 이벤트 객체
 */
function printEventType(e) {
  // 이벤트 구간의 지속 시간 (밀리초 단위)
  const EVENT_DURATION = 800;

  // 현재 시간 저장
  const eventTime = new Date();

  // 처음 이벤트 발생 시 타이머 초기화
  if (timer === 0) {
    timer = new Date();
  }

  // 이전 이벤트와의 시간 차이가 EVENT_DURATION을 초과하면 구분선을 출력
  if (eventTime - timer > EVENT_DURATION) {
    console.log("--------------------------");
  }

  // 이벤트가 발생한 대상이 특정 조건에 부합하지 않으면 기본 동작을 막음
  if (e.target.id !== "mouse") {
    e.preventDefault();
  }

  // 버튼 영역과 현재 이벤트가 발생한 버튼을 선택
  const btns = document.querySelector(`#btns`);
  const btn = document.querySelector(`#btn${e.button}`);

  // 버튼의 스타일을 업데이트하고 클릭된 버튼 번호를 표시
  btns.classList.add(`clicked-${e.button}`);
  btn.textContent = e.button;

  // 이벤트 유형을 콘솔에 출력
  console.log(`${e.type} 이벤트가 발생했습니다.`);

  // 더블 클릭 이벤트가 발생한 경우 버튼 스타일을 변경
  if (e.type === "dblclick") {
    btns.className = "dblclick";
  }

  /**
   * 버튼 스타일과 텍스트를 초기화하는 함수
   */
  function styleInit() {
    btns.className = "";
    btn.textContent = "";
  }

  // EVENT_DURATION 이후 버튼 스타일 초기화
  setTimeout(styleInit, EVENT_DURATION);

  // 타이머를 현재 이벤트 시간으로 업데이트
  timer = eventTime;
}

// 다양한 마우스 이벤트에 대해 printEventType 함수 등록
document.addEventListener("click", printEventType); // 클릭 이벤트
document.addEventListener("contextmenu", printEventType); // 오른쪽 버튼 클릭 (컨텍스트 메뉴)
document.addEventListener("dblclick", printEventType); // 더블 클릭 이벤트
document.addEventListener("mouseup", printEventType); // 마우스 버튼을 뗄 때
document.addEventListener("mousedown", printEventType); // 마우스 버튼을 눌렀을 때

/**
 * [마우스 버튼 이벤트]
 *
 * > MouseEvent.button
 * 0: 마우스 왼쪽 버튼
 * 1: 마우스 휠
 * 2: 마우스 오른쪽 버튼
 *
 * > MouseEvent.type
 * click: 마우스 왼쪽 버튼을 눌렀을 때
 * contextmenu: 마우스 오른쪽 버튼을 눌렀을 때
 * dblclick: 동일한 위치에서 빠르게 두번 click할 때
 * mousedown: 마우스 버튼을 누른 순간
 * mouseup: 마우스 버튼을 눌렀다 뗀 순간
 */
