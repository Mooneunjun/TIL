/**
 * [마우스 이동 이벤트 확장]
 *
 * - MouseEvent.type
 *   - mousemove: 마우스가 이동할 때 발생.
 *   - mouseover: 마우스가 요소 밖에서 안으로 들어올 때 발생.
 *   - mouseout: 마우스가 요소 안에서 밖으로 나갈 때 발생.
 *
 * - MouseEvent.target: 이벤트가 발생한 요소.
 * - MouseEvent.relatedTarget: 이전 또는 이후의 마우스 위치 요소.
 */

// 부모 컨테이너와 셀 요소 선택
const box2 = document.querySelector("#box2");

// 이벤트 데이터 출력 함수
function printEventData(e) {
  console.log("이벤트 타입:", e.type);
  console.log("이벤트 발생 요소:", e.target);
  console.log("이전/이후 위치 요소:", e.relatedTarget);
  console.log("------------------------------------");

  // 셀 요소에 대한 클래스 토글 처리
  if (e.target.classList.contains("cell")) {
    e.target.classList.toggle("on");
  }
}

// 컨테이너에 활성화 상태를 표시하는 함수
function toggleBoxState(e) {
  if (e.type === "mouseover") {
    box2.classList.add("active");
  } else if (e.type === "mouseout") {
    box2.classList.remove("active");
  }
}

// 이벤트 핸들러 등록
box2.addEventListener("mouseover", (e) => {
  printEventData(e);
  toggleBoxState(e);
});

box2.addEventListener("mouseout", (e) => {
  printEventData(e);
  toggleBoxState(e);
});

// 추가: 셀 내부 이동 경로 표시
box2.addEventListener("mousemove", (e) => {
  if (e.target.classList.contains("cell")) {
    const cellIndex = Array.from(box2.children).indexOf(e.target) + 1;
    console.log(`현재 마우스가 있는 셀: ${cellIndex}`);
  }
});
