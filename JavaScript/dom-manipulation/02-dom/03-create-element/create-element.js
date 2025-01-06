// <ul> 요소 선택 (추가할 요소의 부모 노드 선택)
const todoList = document.querySelector("#todo-list");

// 1단계: 새로운 <li> 요소 생성
// createElement 메서드를 사용하여 새로운 <li> 요소 생성
const firstItem = document.createElement("li");
const secondItem = document.createElement("li");

// 2단계: 생성한 요소 꾸미기
// 첫 번째 <li> 요소에 텍스트 추가
firstItem.textContent = "내일 할 일"; // 텍스트만 추가 (HTML 태그가 적용되지 않음)

// 두 번째 <li> 요소에 HTML 코드 추가
secondItem.innerHTML = "<strong>다음 주 할 일</strong>"; // HTML 태그도 추가 가능

// 3단계: 요소 삽입
// 생성한 요소를 <ul>의 마지막 자식 노드로 추가
todoList.append(firstItem);

// 생성한 요소를 <ul>의 첫 번째 자식 노드로 추가
todoList.prepend(secondItem);

// 4단계: 여러 개의 요소를 생성하고 추가하기
// 세 번째 <li> 요소 생성
const thirdItem = document.createElement("li");
thirdItem.textContent = "다음 달 할 일"; // 텍스트 추가

// 네 번째 <li> 요소 생성
const fourthItem = document.createElement("li");
fourthItem.textContent = "올해의 목표"; // 텍스트 추가

// append 메서드를 사용하여 여러 요소를 한 번에 추가 (마지막 자식으로 추가)
todoList.append(thirdItem, fourthItem);

// 형제 노드로 요소 삽입하기
// 새로운 <h2> 요소 생성
const newTitle = document.createElement("h2");
newTitle.textContent = "추가된 섹션 제목"; // 섹션 제목 추가

// <ul> 요소 바로 앞에 새로운 <h2> 요소 삽입
todoList.before(newTitle);

// 문자열로 텍스트 노드 추가하기
// append 메서드에 문자열을 전달하면 자동으로 텍스트 노드로 변환되어 추가
todoList.append("끝!"); // "끝!" 문자열이 텍스트 노드로 마지막에 추가됨
