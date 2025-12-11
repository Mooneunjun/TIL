// 데이터를 표시할 태그를 선택
const fields = document.querySelectorAll("[data-field]");

// 객체 데이터
const task = {
  title: "프로젝트 기획",
  manager: "Alice, Bob",
  status: "",
};

// 데이터와 태그 매핑
fields.forEach((tag) => {
  const field = tag.dataset.field; // data-field 속성값 가져오기
  tag.textContent = task[field]; // 객체 데이터로 태그 내용 채우기
});

// 상태 변경 버튼 이벤트 처리
const btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
  const status = btn.dataset.status; // data-status 속성값 가져오기
  btn.onclick = function () {
    fields[2].textContent = status; // 상태 표시 변경
    fields[2].dataset.status = status; // data-status 속성값 업데이트
  };
});
