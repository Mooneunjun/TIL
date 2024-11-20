// 1. 배열 생성하기
const courseRanking = [
  "자바스크립트 프로그래밍 기초",
  "파이썬 프로그래밍 기초",
  "컴퓨터 개론",
  "웹 개발 입문",
];

// 2. 배열 요소 접근하기
console.log("=== 배열 요소 접근하기 ===");
console.log(courseRanking[0]); // 첫 번째 요소
console.log(courseRanking[2]); // 세 번째 요소
console.log(courseRanking[3 - 1]); // 계산식 활용

// 3. 배열 요소와 인덱스의 특징
console.log("\n=== 배열의 인덱스 ===");
console.log(`첫 번째 요소: ${courseRanking[0]}`); // 0번 인덱스
console.log(`세 번째 요소: ${courseRanking[2]}`); // 2번 인덱스
console.log(`배열 길이: ${courseRanking.length}`); // 총 요소 수

// 4. 배열 활용 예시: 순서가 중요한 데이터
console.log("\n=== 배열 활용 예시 ===");
const subwayLine = ["김포공항", "홍대입구", "서울역"];
console.log(`지하철 노선: ${subwayLine.join(" -> ")}`);

// 5. 배열 활용 예시: 간단한 값 묶음
const fruits = ["사과", "바나나", "복숭아"];
console.log(`과일 목록: ${fruits.join(", ")}`);

//--------------------------------------------------------

// 1. 배열 선언과 자료형 확인
console.log("=== 1. 배열 선언과 자료형 확인 ===");
const members = ["프로그래밍", "자바스크립트", "배열"];
console.log(typeof members); // "object"
console.log(members); // ["프로그래밍", "자바스크립트", "배열"]

// 배열 요소에 접근
console.log(members[0]); // "프로그래밍"
console.log(members[members.length - 1]); // "배열"

// 2. 배열의 길이 확인
console.log("\n=== 2. 배열의 길이 확인 ===");
console.log(members.length); // 3

// 배열 크기 변경
members.length = 5;
console.log(members); // ["프로그래밍", "자바스크립트", "배열", <2 empty items>]

// 배열 요소 추가
members[5] = "학습";
console.log(members);
// ["프로그래밍", "자바스크립트", "배열", <2 empty items>, "학습"]

// 빈 요소와 undefined의 차이
console.log(members[4]); // undefined
console.log(members.length); // 6

// 3. 배열 요소 추가와 수정
console.log("\n=== 3. 배열 요소 추가와 수정 ===");
const newMembers = ["프로그래밍", "자바스크립트"];
newMembers[2] = "배열"; // 새 요소 추가
console.log(newMembers); // ["프로그래밍", "자바스크립트", "배열"]

// 기존 요소 수정
newMembers[1] = "웹 개발";
console.log(newMembers); // ["프로그래밍", "웹 개발", "배열"]

// 4. 배열 요소 삭제
console.log("\n=== 4. 배열 요소 삭제 ===");
// delete 연산자 사용
delete newMembers[1];
console.log(newMembers); // ["프로그래밍", <empty>, "배열"]
console.log(newMembers.length); // 3

// splice 메서드 사용
newMembers.splice(1, 1); // 인덱스 1의 요소 삭제
console.log(newMembers); // ["프로그래밍", "배열"]

// 5. 배열 반복 처리
console.log("\n=== 5. 배열 반복 처리 ===");
const numbers = [10, 20, 30, 40];
for (let i = 0; i < numbers.length; i++) {
  console.log(`Index ${i}: ${numbers[i]}`);
}

// forEach 메서드 활용
numbers.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});
