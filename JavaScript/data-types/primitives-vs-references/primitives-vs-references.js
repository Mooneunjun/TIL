//------------------- 기본형(Primitive Type) -------------------
// 기본형 데이터는 변수에 값 자체가 저장된다.
let x = 3; // x에 숫자 3 할당
let y = x; // y에 x의 값을 복사
console.log(x); // 출력: 3
console.log(y); // 출력: 3

// y의 값을 변경해도 x는 영향을 받지 않는다.
y = 5;
console.log(x); // 출력: 3 (x는 변경되지 않음)
console.log(y); // 출력: 5 (y만 변경됨)

//------------------- 참조형(Reference Type) -------------------
// 참조형 데이터는 변수에 값의 주소를 저장한다.
let obj1 = { name: "Alice" }; // obj1에 객체를 할당
let obj2 = obj1; // obj2에 obj1의 주소를 복사
console.log(obj1); // 출력: { name: "Alice" }
console.log(obj2); // 출력: { name: "Alice" }

// obj2를 수정하면 obj1도 영향을 받는다.
obj2.age = 25;
console.log(obj1); // 출력: { name: "Alice", age: 25 }
console.log(obj2); // 출력: { name: "Alice", age: 25 }

//------------------- 기본형 vs 참조형 -------------------
// 기본형 데이터 비교
let a = 10;
let b = a; // 값 복사
b = 20;
console.log(a); // 출력: 10 (a는 변경되지 않음)
console.log(b); // 출력: 20 (b만 변경됨)

// 참조형 데이터 비교
let arr1 = [1, 2, 3];
let arr2 = arr1; // 주소 복사
arr2.push(4); // arr2에 값 추가
console.log(arr1); // 출력: [1, 2, 3, 4] (arr1도 변경됨)
console.log(arr2); // 출력: [1, 2, 3, 4]

//------------------- 주의점 -------------------
// 참조형 데이터는 복사를 깊게 수행해야 서로 독립적으로 동작
// 얕은 복사(shallow copy): 주소만 복사
let shallowCopy = arr1;
shallowCopy.pop(); // shallowCopy에서 요소 제거
console.log(arr1); // 출력: [1, 2, 3] (원본도 변경됨)

// 깊은 복사(deep copy): 독립적인 객체 생성
let deepCopy = JSON.parse(JSON.stringify(arr1));
deepCopy.push(5); // deepCopy에만 값 추가
console.log(arr1); // 출력: [1, 2, 3] (원본은 변경되지 않음)
console.log(deepCopy); // 출력: [1, 2, 3, 5]
