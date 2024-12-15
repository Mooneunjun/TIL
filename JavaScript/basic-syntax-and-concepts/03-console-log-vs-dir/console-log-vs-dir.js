// 다양한 자료형 선언
const str = "Hello";
const num = 123;
const bool = true;
const arr = [1, 2, 3];
const obj = {
  name: "Sample",
  email: "sample@example.com",
};
function func() {
  console.log("This is a function!");
}
const myDOM = document.body;

// log와 dir 비교
console.log("--- str ---");
console.log(str); // Hello
console.dir(str); // "Hello"

console.log("--- num ---");
console.log(num); // 123
console.dir(num); // 123

console.log("--- bool ---");
console.log(bool); // true
console.dir(bool); // true

console.log("--- arr ---");
console.log(arr); // [1, 2, 3]
console.dir(arr); // 배열 객체로 출력

console.log("--- obj ---");
console.log(obj); // {name: 'Sample', email: 'sample@example.com'}
console.dir(obj); // 객체로 출력, 속성 탐색 가능

console.log("--- func ---");
console.log(func); // This is a function!
console.dir(func); // 함수 속성 출력 가능

console.log("--- myDOM ---");
console.log(myDOM); // <body>...</body>
console.dir(myDOM); // DOM 객체로 출력
