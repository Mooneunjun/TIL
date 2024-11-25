// 1. for...of를 활용한 기본 배열 순회
const fruits = ["사과", "바나나", "체리"];
for (const fruit of fruits) {
  console.log(fruit); // 배열의 각 요소 출력
}

// 2. 문자열 순회
const greeting = "안녕하세요!";
for (const char of greeting) {
  console.log(char); // 문자열의 각 문자 출력
}

// 3. Set 순회
const uniqueNumbers = new Set([1, 2, 3, 4]);
for (const number of uniqueNumbers) {
  console.log(number); // Set의 각 요소 출력
}

// 4. Map 순회
const userMap = new Map([
  ["name", "홍길동"],
  ["age", 30],
  ["city", "서울"],
]);
for (const [key, value] of userMap) {
  console.log(`${key}: ${value}`); // Map의 각 키-값 출력
}

// 5. 객체의 키와 값을 Object.entries()로 순회
const user = {
  name: "이순신",
  age: 45,
  occupation: "장군",
};
for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`); // 객체의 키-값 출력
}

// 6. 중첩된 배열 순회
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (const row of matrix) {
  for (const value of row) {
    console.log(value); // 2차원 배열의 각 요소 출력
  }
}

// 7. 이터러블 객체 순회
const customIterable = {
  *[Symbol.iterator]() {
    yield "A";
    yield "B";
    yield "C";
  },
};
for (const value of customIterable) {
  console.log(value); // 커스텀 이터러블의 각 요소 출력
}
