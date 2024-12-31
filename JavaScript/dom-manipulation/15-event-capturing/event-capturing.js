// 모든 요소에 캡처링과 버블링 단계의 이벤트 핸들러 등록
for (let elem of document.querySelectorAll("*")) {
  // 캡처링 단계
  elem.addEventListener(
    "click",
    (e) => alert(`캡처링 단계: ${elem.tagName}`),
    true
  );

  // 버블링 단계
  elem.addEventListener("click", (e) => alert(`버블링 단계: ${elem.tagName}`));
}
