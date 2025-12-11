// 1. splice 메서드
const members = ["프로그래밍", "자바스크립트", "배열", "강의", "학습"];
console.log("초기 members 배열:", members);

// 특정 요소 삭제
members.splice(4, 1);
console.log("splice로 '학습' 삭제 후:", members);

// 삭제 후 새로운 요소 추가
members.splice(2, 1, "자료구조", "알고리즘");
console.log("'자료구조'와 '알고리즘' 추가 후:", members);

// 요소 추가만 하기
members.splice(1, 0, "컴퓨터 과학", "코딩 인터뷰");
console.log("'컴퓨터 과학'과 '코딩 인터뷰' 추가 후:", members);

// 요소 수정
members.splice(2, 1, "네트워크");
console.log("'네트워크'로 수정 후:", members);

console.log("--------------------------------------------------");

// 2. shift, pop, unshift, push
const frameworks = ["HTML", "CSS", "JavaScript", "React"];
console.log("초기 frameworks 배열:", frameworks);

// 첫 번째 요소 삭제 (shift)
const removedShift = frameworks.shift();
console.log("shift 실행 후:", frameworks);
console.log("shift로 삭제된 요소:", removedShift);

// 마지막 요소 삭제 (pop)
const removedPop = frameworks.pop();
console.log("pop 실행 후:", frameworks);
console.log("pop으로 삭제된 요소:", removedPop);

// 첫 번째 위치에 값 추가 (unshift)
frameworks.unshift("HTML");
console.log("unshift 실행 후:", frameworks);

// 마지막 위치에 값 추가 (push)
frameworks.push("React");
console.log("push 실행 후:", frameworks);

console.log("--------------------------------------------------");

// 3. indexOf, lastIndexOf
const brands = ["Google", "Kakao", "Naver", "Kakao"];
console.log("'Kakao'의 첫 번째 인덱스:", brands.indexOf("Kakao"));
console.log("'Kakao'의 마지막 인덱스:", brands.lastIndexOf("Kakao"));
console.log("'Daum'의 인덱스:", brands.indexOf("Daum"));

console.log("--------------------------------------------------");

// 4. includes
console.log("'Kakao'가 포함되어 있는가?:", brands.includes("Kakao"));
console.log("'Daum'이 포함되어 있는가?:", brands.includes("Daum"));

console.log("--------------------------------------------------");

// 5. reverse
console.log("원래 brands 배열:", brands);
brands.reverse();
console.log("reverse 실행 후 brands 배열:", brands);
