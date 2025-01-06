// DOM Tree 탐색 예제

// #content 요소 가져오기
const content = document.querySelector("#content");

// 자식 요소 탐색
console.log("자식 요소:", content.children); // HTMLCollection [h1, ul]
console.log("첫 번째 자식 요소:", content.firstElementChild); // <h1>...</h1>
console.log("마지막 자식 요소:", content.lastElementChild); // <ul>...</ul>

// 부모 요소 탐색
const title = document.querySelector("#title");
console.log("부모 요소:", title.parentElement); // <div id="content">...</div>

// 형제 요소 탐색
const list = document.querySelector("#list");
console.log("이전 형제 요소:", list.previousElementSibling); // <h1>...</h1>
console.log("다음 형제 요소:", list.nextElementSibling); // null

// 모든 노드 탐색
console.log("모든 자식 노드:", content.childNodes); // NodeList [Text, h1, Text, ul, Text]
console.log("첫 번째 자식 노드:", content.firstChild); // Text (줄바꿈 및 공백)
console.log("마지막 자식 노드:", content.lastChild); // Text (줄바꿈 및 공백)

// 노드 타입 확인
console.log("노드 타입 (#title):", title.nodeType); // 1 (요소 노드)
console.log("노드 타입 (첫 번째 자식 노드):", content.firstChild.nodeType); // 3 (텍스트 노드)

// parentNode와 parentElement 비교
const item1 = document.querySelector("#item1");
console.log("부모 노드 (parentNode):", item1.parentNode); // <ul>...</ul>
console.log("부모 요소 노드 (parentElement):", item1.parentElement); // <ul>...</ul>
