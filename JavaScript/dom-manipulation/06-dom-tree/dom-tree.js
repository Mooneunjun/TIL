// DOM 트리의 최상위 노드 (document)
console.log("Document Node:", document);

// 요소 노드 탐색
const mainTitle = document.querySelector("#main-title");
console.log("Main Title (Element Node):", mainTitle);

// 텍스트 노드 확인
const paragraph = document.querySelector("#paragraph");
console.log("Paragraph Element Node:", paragraph);
console.log("Paragraph Text Node:", paragraph.firstChild); // 텍스트 노드 접근

// 부모 노드와 자식 노드
console.log("Parent of #paragraph:", paragraph.parentNode); // 부모 노드
console.log("Children of #list:", document.querySelector("#list").children); // 자식 노드

// 형제 노드
console.log("Next Sibling of #paragraph:", paragraph.nextElementSibling); // 형제 노드

// DOM 트리 탐색
const listItems = document.querySelectorAll("#list > li");
listItems.forEach((item, index) => {
  console.log(`List Item ${index + 1}:`, item);
});

// DOM 트리의 노드 타입 확인
console.log("Node Type of #main-title:", mainTitle.nodeType); // 요소 노드
console.log("Node Type of Paragraph Text Node:", paragraph.firstChild.nodeType); // 텍스트 노드
