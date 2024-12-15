// 브라우저 창 크기 정보 확인
console.log("Window Width:", window.innerWidth);
console.log("Window Height:", window.innerHeight);

// 새 창 열기
const openWindowButton = document.querySelector("#open-window");
openWindowButton.onclick = function () {
  const newWindow = window.open(
    "https://example.com",
    "_blank",
    "width=500,height=500"
  );
  console.log("New window opened:", newWindow);
};

// 창 닫기
const closeWindowButton = document.querySelector("#close-window");
closeWindowButton.onclick = function () {
  if (newWindow) {
    newWindow.close();
    console.log("New window closed");
  }
};

// window 객체의 다른 프로퍼티와 메서드 출력
console.log("Window document:", window.document);
console.log("Window console:", window.console);
