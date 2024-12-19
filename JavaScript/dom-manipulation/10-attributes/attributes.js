// 요소 선택
const element = document.querySelector("#tomorrow");

// 1. getAttribute: HTML 속성 값 가져오기
console.log("id:", element.getAttribute("id")); // id 속성 가져오기
console.log("class:", element.getAttribute("class")); // class 속성 가져오기
console.log("href:", element.getAttribute("href")); // href 속성 가져오기 (표준 속성 아님도 동작)

// 2. setAttribute: HTML 속성 추가 또는 수정
element.setAttribute("data-category", "todo"); // 새로운 속성 추가
element.setAttribute("class", "updated-list"); // 기존 속성 수정
element.setAttribute("href", "https://new-example.com"); // href 속성 수정

console.log("After setAttribute:");
console.log(element.outerHTML); // 업데이트된 HTML 출력

// 3. removeAttribute: HTML 속성 제거
element.removeAttribute("href"); // href 속성 제거
element.removeAttribute("data-category"); // data-category 속성 제거

console.log("After removeAttribute:");
console.log(element.outerHTML); // 속성 제거 후 HTML 출력

// 추가: 대소문자 무시 확인
element.setAttribute("DaTa-Test", "sample");
console.log("data-test:", element.getAttribute("data-test")); // 소문자로 변환 후 동작
