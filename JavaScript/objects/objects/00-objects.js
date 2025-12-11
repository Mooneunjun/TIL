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

// ----------------------------------------------------------------

// 객체 생성 예제
const user = {
  name: "John Doe", // 문자열 프로퍼티
  age: 30, // 숫자 프로퍼티
  isActive: true, // 불린 프로퍼티
  skills: ["JavaScript", "React"], // 배열 프로퍼티
  address: {
    // 객체 프로퍼티
    city: "Seoul",
    zipCode: "12345",
  },
};

// 1. 객체 프로퍼티 접근
console.log(user.name); // John Doe
console.log(user["address"]); // { city: 'Seoul', zipCode: '12345' }

// 2. 객체 프로퍼티 수정 및 추가
user.name = "Jane Doe";
user.job = "Developer"; // 새로운 프로퍼티 추가
console.log(user.name); // Jane Doe
console.log(user.job); // Developer

// 3. 객체 프로퍼티 삭제
delete user.isActive;
console.log(user.isActive); // undefined

// 4. 객체에 특정 프로퍼티가 있는지 확인: in 연산자
console.log("name" in user); // true
console.log("job" in user); // true
console.log("isActive" in user); // false

// 5. undefined와 in 연산자의 차이
user.hobby = undefined;
console.log(user.hobby === undefined); // true
console.log("hobby" in user); // true
