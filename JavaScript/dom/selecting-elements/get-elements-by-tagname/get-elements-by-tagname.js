// 특정 태그를 선택하기: button 태그
// ------------------------------------------
const buttons = document.getElementsByTagName("button");
console.log("Selected button elements:", buttons);
// 출력: HTMLCollection(2) [button, button]

// ------------------------------------------

// 모든 태그를 선택하기
const allTags = document.getElementsByTagName("*");
console.log("All tags in the document:", allTags);
// 출력: HTMLCollection([...모든 태그...])

// ------------------------------------------

// for...of 루프를 활용해 각 버튼 출력
for (const button of buttons) {
  console.log("Button element:", button);
}
// 출력:
// <button>Button 1</button>
// <button>Button 2</button>

// ------------------------------------------

// p 태그를 선택하고 순회하며 내용 출력하기
const paragraphs = document.getElementsByTagName("p");
for (const paragraph of paragraphs) {
  console.log("Paragraph element:", paragraph);
}
// 출력:
// <p>First paragraph</p>
// <p>Second paragraph</p>
