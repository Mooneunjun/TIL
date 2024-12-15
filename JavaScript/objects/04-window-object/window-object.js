// 브라우저 창 크기 정보 확인
console.log("Window Width:", window.innerWidth);
console.log("Window Height:", window.innerHeight);

// 새 창 열기
const newWindow = window.open(
  "https://example.com",
  "_blank",
  "width=500,height=500"
);

// 창 닫기
// newWindow 객체가 존재하는 경우에만 창 닫기
newWindow.close(); // 창 닫기

// window 객체의 다른 프로퍼티와 메서드 출력
console.log("Window document:", window.document);
console.log("Window console:", window.console);

// window는 전역 객체(Global Object)
// 전역 객체는 모든 코드에서 접근 가능한 최상위 객체를 의미한다. 모든 내장 객체와 함수들이 이 window 객체에 포함되어 있다.
// 예시: console.log는 사실 window.console.log와 동일하다.window 객체는 명시적으로 작성하지 않아도 기본적으로 참조된다.
console.log("Hello, World!");
window.console.log("Hello, World!"); // 동일한 결과
