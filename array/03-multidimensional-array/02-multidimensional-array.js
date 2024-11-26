// multidimensional-array.js

// 2차원 배열 선언 및 값 접근
const array2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// 2에 접근
console.log(array2D[0][1]); // 출력: 2

// 냉장고 내용물 예제
const fridge = [
  ["우유", "계란"], // 1층
  ["사과", "포도"], // 2층
  ["김치", "된장"], // 3층
];
console.log(fridge[1][0]); // 출력: 사과

// 우편함 예제
const mailboxes = [
  [101, 102, 103],
  [201, 202, 203],
  [301, 302, 303],
];
console.log(mailboxes[1][2]); // 출력: 203

// 체스판 예제
const chessBoard = [
  ["R", "N", "B", "Q", "K", "B", "N", "R"], // 1행
  ["P", "P", "P", "P", "P", "P", "P", "P"], // 2행
  [null, null, null, null, null, null, null, null], // 빈 칸
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
];
console.log(chessBoard[0][3]); // 출력: Q

// 객체를 사용한 냉장고 표현
const fridgeWithMeaning = {
  firstFloor: ["우유", "계란"],
  secondFloor: ["사과", "포도"],
  thirdFloor: ["김치", "된장"],
};
console.log(fridgeWithMeaning.secondFloor[0]); // 출력: 사과
