// 링크 이동 방지
document.getElementById("myLink").addEventListener("click", (event) => {
  // 기본 동작(페이지 이동)을 방지
  event.preventDefault();
  alert("지금은 페이지로 이동할 수 없습니다.");
});

// 체크박스 클릭 시 텍스트 입력창 활성화/비활성화
document.getElementById("myCheckbox").addEventListener("click", (event) => {
  const input = document.getElementById("myInput");
  if (event.target.checked) {
    // 체크박스 선택 시 입력창 비활성화
    input.disabled = true;
    input.placeholder = "입력 불가";
  } else {
    // 체크박스 해제 시 입력창 활성화
    input.disabled = false;
    input.placeholder = "여기에 입력 가능";
  }
});

// 오른쪽 클릭 방지
document
  .getElementById("noRightClick")
  .addEventListener("contextmenu", (event) => {
    // 기본 동작(컨텍스트 메뉴 열기)을 방지
    event.preventDefault();
    alert("이 영역에서는 오른쪽 클릭이 방지되었습니다.");
  });

// 폼 제출 방지
document.getElementById("myForm").addEventListener("submit", (event) => {
  // 기본 동작(폼 제출)을 방지
  event.preventDefault();
  alert("폼 제출이 방지되었습니다.");
});
