// 요소 선택
const box = document.querySelector("#box");

// 특정 위치 도달 시 동작 변경
const targetX = 150; // 특정 X 좌표
const targetY = 150; // 특정 Y 좌표

box.addEventListener("mousemove", (event) => {
  // 마우스 위치 출력
  console.log(`Client - X: ${event.clientX}, Y: ${event.clientY}`);
  console.log(`Page - X: ${event.pageX}, Y: ${event.pageY}`);
  console.log(`Offset - X: ${event.offsetX}, Y: ${event.offsetY}`);

  // 특정 좌표 초과 여부에 따라 배경색 변경
  if (event.clientX > targetX && event.clientY > targetY) {
    box.style.backgroundColor = "lightgreen";
  } else {
    box.style.backgroundColor = "lightblue";
  }
});

// ---------------------------------------------

// 마우스 이동 이벤트 관련 예제 코드

// 마우스가 움직일 때 클라이언트 좌표 출력
box.addEventListener("mousemove", (event) => {
  console.log(`클라이언트 좌표 - X: ${event.clientX}, Y: ${event.clientY}`);
});

// 문서 전체 기준으로 마우스 좌표 출력
document.addEventListener("mousemove", (event) => {
  console.log(`문서 기준 좌표 - X: ${event.pageX}, Y: ${event.pageY}`);
});

// 이벤트 발생 타겟 기준으로 마우스 좌표 출력
box.addEventListener("mousemove", (event) => {
  console.log(`타겟 기준 좌표 - X: ${event.offsetX}, Y: ${event.offsetY}`);
});

// 특정 위치에 도달했을 때 박스의 배경색 변경
box.addEventListener("mousemove", (event) => {
  if (event.offsetX > 150 && event.offsetY > 150) {
    box.style.backgroundColor = "lightgreen"; // 특정 위치 도달 시 색 변경
  } else {
    box.style.backgroundColor = "lightblue"; // 기본 배경색
  }
});

// 마우스 이동 방향 파악
let prevX = 0; // 이전 X 좌표 저장
let prevY = 0; // 이전 Y 좌표 저장

document.addEventListener("mousemove", (event) => {
  const directionX = event.clientX > prevX ? "오른쪽" : "왼쪽";
  const directionY = event.clientY > prevY ? "아래쪽" : "위쪽";

  console.log(`X 방향: ${directionX}, Y 방향: ${directionY}`);
  prevX = event.clientX; // 현재 X 좌표를 이전 좌표로 업데이트
  prevY = event.clientY; // 현재 Y 좌표를 이전 좌표로 업데이트
});
