// 배열 복사: 참조 공유 문제와 해결 방법
// -------------------------------------------
const numbers1 = [1, 2, 3];
const numbers2 = numbers1; // 참조만 복사

numbers2.push(4); // numbers2를 수정하면 numbers1도 변경됨
console.log("Numbers1:", numbers1); // [1, 2, 3, 4]
console.log("Numbers2:", numbers2); // [1, 2, 3, 4]

// 해결: slice 메서드로 배열 복사
const numbers3 = numbers1.slice();
numbers3.push(5); // numbers3만 변경됨
console.log("Numbers1 after slice:", numbers1); // [1, 2, 3, 4]
console.log("Numbers3 after slice:", numbers3); // [1, 2, 3, 4, 5]

// -------------------------------------------

// 객체 복사: 참조 공유 문제와 해결 방법
// -------------------------------------------
const course1 = { title: "JavaScript Basics" };
const course2 = course1; // 참조만 복사

course2.title = "Advanced JavaScript"; // course2를 수정하면 course1도 변경됨
console.log("Course1:", course1); // { title: "Advanced JavaScript" }
console.log("Course2:", course2); // { title: "Advanced JavaScript" }

// 해결: Object.assign으로 객체 복사
const course3 = Object.assign({}, course1);
course3.title = "React Basics"; // course3만 변경됨
console.log("Course1 after assign:", course1); // { title: "Advanced JavaScript" }
console.log("Course3 after assign:", course3); // { title: "React Basics" }

// -------------------------------------------

// 중첩된 데이터 구조 복사: 얕은 복사의 한계
// -------------------------------------------
const course4 = {
  title: "JavaScript Basics",
  prerequisites: ["HTML", "CSS"],
};

const course5 = Object.assign({}, course4); // 얕은 복사
course5.prerequisites.push("Python"); // prerequisites는 참조 공유
console.log("Course4 prerequisites:", course4.prerequisites); // ["HTML", "CSS", "Python"]
console.log("Course5 prerequisites:", course5.prerequisites); // ["HTML", "CSS", "Python"]

// -------------------------------------------

// 깊은 복사: JSON.parse와 JSON.stringify 활용
// -------------------------------------------
const course6 = JSON.parse(JSON.stringify(course4));
course6.prerequisites.push("Ruby"); // course6만 변경됨
console.log("Course4 prerequisites after deep copy:", course4.prerequisites); // ["HTML", "CSS", "Python"]
console.log("Course6 prerequisites after deep copy:", course6.prerequisites); // ["HTML", "CSS", "Python", "Ruby"]

// -------------------------------------------

// 사용자 정의 깊은 복사 함수 (for...in 사용)
// -------------------------------------------
function deepCopy(obj) {
  const newObj = {};
  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      // 배열일 경우 slice로 복사
      newObj[key] = obj[key].slice();
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      // 객체일 경우 재귀적으로 복사
      newObj[key] = deepCopy(obj[key]);
    } else {
      // 원시값 복사
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

const course7 = deepCopy(course4);
course7.prerequisites.push("Node.js"); // course7만 변경됨
console.log(
  "Course4 prerequisites after deepCopy function:",
  course4.prerequisites
); // ["HTML", "CSS", "Python"]
console.log(
  "Course7 prerequisites after deepCopy function:",
  course7.prerequisites
); // ["HTML", "CSS", "Python", "Node.js"]
