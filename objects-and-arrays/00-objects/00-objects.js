// 객체(Object) 기본 예제
const person = {
  name: "Alice", // Key: name, Value: "Alice"
  age: 25, // Key: age, Value: 25
  isStudent: true, // Key: isStudent, Value: true
};
console.log(person); // 객체 전체 출력

// 객체의 자료형 확인
console.log(typeof person); // "object" 출력

// 특수문자를 포함한 객체 프로퍼티 예제
const course = {
  "course name": "JavaScript", // Key에 띄어쓰기를 포함
  "course-level": "beginner", // Key에 하이픈 포함
  "1st chapter": "Introduction", // Key첫 글자에 숫자 포함
};
console.log(course); // 객체 전체 출력

// 중첩된 객체 예제
const student = {
  name: "Alice",
  age: 25,
  course: {
    title: "JavaScript", // 중첩 객체의 Key-Value
    level: "beginner",
  },
};
console.log(student); // 중첩 객체 포함된 student 객체 전체 출력
