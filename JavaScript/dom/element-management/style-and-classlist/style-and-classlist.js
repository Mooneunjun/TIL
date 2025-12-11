// 오늘 할 일 리스트 선택
const today = document.querySelector("#today");

// 1. 스타일 프로퍼티를 사용하여 직접 스타일 조작
// 첫 번째 항목에 텍스트 꾸미기 및 배경색 추가
today.children[0].style.textDecoration = "line-through"; // 텍스트에 줄 긋기
today.children[0].style.backgroundColor = "lightgray"; // 배경색 변경

// 내일 할 일 리스트 선택
const tomorrow = document.querySelector("#tomorrow");

// 2. 클래스 조작
// 첫 번째 항목에 "highlight" 클래스 추가
tomorrow.children[0].classList.add("highlight");

// 3. 클래스 토글
// 두 번째 항목에 "done" 클래스를 토글
tomorrow.children[1].classList.toggle("done");

// 4. 클래스 토글 강제 동작
// 강제로 "highlight" 클래스를 추가 (true)
tomorrow.children[1].classList.toggle("highlight", true);

// 강제로 "highlight" 클래스를 제거 (false)
tomorrow.children[2].classList.toggle("highlight", false);
