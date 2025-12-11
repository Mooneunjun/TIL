// 키보드 이벤트 핸들러 등록
const input = document.querySelector("#input");
input.addEventListener("keydown", (event) => {
  console.log("키보드 이벤트 발생");
  console.log("눌린 키:", event.key); // 키의 값
  console.log("키 코드:", event.code); // 키의 위치
});

// 마우스 이벤트 핸들러 등록
const button = document.querySelector("#button");
button.addEventListener("click", (event) => {
  console.log("마우스 이벤트 발생");
  console.log("이벤트 타입:", event.type); // 이벤트 타입
  console.log("클릭한 요소:", event.target); // 클릭된 요소
  console.log("클릭 위치 - X:", event.clientX, "Y:", event.clientY); // 마우스 좌표
});
