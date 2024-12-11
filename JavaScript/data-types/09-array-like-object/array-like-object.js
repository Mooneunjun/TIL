// 유사 배열 객체의 기본 예제
// ------------------------------------------
const arrayLike = {
  0: "red",
  1: "blue",
  2: "green",
  length: 3,
};

console.log("Array-like object:", arrayLike);
// 출력: { 0: "red", 1: "blue", 2: "green", length: 3 }

// 숫자 형태의 인덱싱 가능
console.log("First element:", arrayLike[0]); // "red"
console.log("Second element:", arrayLike[1]); // "blue"

// length 프로퍼티를 통한 요소 개수 확인
console.log("Length:", arrayLike.length); // 3

// ------------------------------------------

// 유사 배열은 배열 메서드를 사용할 수 없음
try {
  arrayLike.push("yellow"); // Error 발생
} catch (e) {
  console.log("Error:", e.message); // "arrayLike.push is not a function"
}

// ------------------------------------------

// 유사 배열인지 확인
console.log("Is arrayLike an array?", Array.isArray(arrayLike)); // false

// ------------------------------------------

// 유사 배열을 배열로 변환 (Array.from)
const arrayFromArrayLike = Array.from(arrayLike);
console.log("Converted array (Array.from):", arrayFromArrayLike);
// 출력: ["red", "blue", "green"]

// ------------------------------------------

// 유사 배열을 배열로 변환 (스프레드 연산자)
const arrayFromSpread = [...arrayLike];
console.log("Converted array (Spread):", arrayFromSpread);
// 출력: ["red", "blue", "green"]

// ------------------------------------------

// 함수의 arguments 객체 (유사 배열의 대표 사례)
function exampleFunction() {
  console.log("Arguments object:", arguments);
  console.log("First argument:", arguments[0]);
  console.log("Length of arguments:", arguments.length);
}

exampleFunction("red", "blue", "green");
// 출력:
// Arguments object: { 0: "red", 1: "blue", 2: "green", length: 3 }
// First argument: red
// Length of arguments: 3
