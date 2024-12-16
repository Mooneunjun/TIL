// 요소 노드 주요 프로퍼티

// #list 요소 선택
const list = document.querySelector("#list");

// innerHTML
console.log("innerHTML:", list.innerHTML);
// 출력: "<li id="item1">항목 1</li><li id="item2">항목 2</li><li id="item3">항목 3</li>"

// innerHTML 수정
list.innerHTML += '<li id="item4">항목 4</li>';
console.log("innerHTML 수정 후:", list.innerHTML);
// 출력: 기존 내용 + "<li id="item4">항목 4</li>"

// outerHTML
console.log("outerHTML:", list.outerHTML);
/*
출력:
<ul id="list">
  <li id="item1">항목 1</li>
  <li id="item2">항목 2</li>
  <li id="item3">항목 3</li>
  <li id="item4">항목 4</li>
</ul>
*/

// outerHTML 수정
list.outerHTML = '<p id="newElement">새로운 요소</p>';
console.log(document.querySelector("#newElement"));
// 출력: <p id="newElement">새로운 요소</p>

// #item1 요소 다시 선택
const item1 = document.querySelector("#item1");

// textContent
console.log("textContent:", item1.textContent);
// 출력: "항목 1"

// textContent 수정
item1.textContent = "<strong>텍스트 콘텐츠 수정</strong>";
console.log("textContent 수정 후:", item1.textContent);
// 출력: "<strong>텍스트 콘텐츠 수정</strong>"
