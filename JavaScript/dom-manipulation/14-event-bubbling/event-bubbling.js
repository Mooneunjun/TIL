// 각 요소에 이벤트 핸들러 등록
document.getElementById("content").addEventListener("click", () => {
  console.log("Content 클릭");
});

document.getElementById("list").addEventListener("click", () => {
  console.log("List 클릭");
});

document.getElementById("item").addEventListener("click", (event) => {
  console.log("Item 클릭");
  // 아래 줄의 주석을 해제하면 버블링이 멈춤
  // event.stopPropagation();
});

// target과 currentTarget 확인하기
document.getElementById("item").addEventListener("click", (event) => {
  console.log("Target:", event.target); // 최초 클릭된 요소
  console.log("CurrentTarget:", event.currentTarget); // 현재 핸들러가 동작하는 요소
});
