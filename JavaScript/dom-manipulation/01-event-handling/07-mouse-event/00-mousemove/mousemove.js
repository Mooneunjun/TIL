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
