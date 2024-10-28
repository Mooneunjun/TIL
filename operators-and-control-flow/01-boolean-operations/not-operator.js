// NOT 연산 예시
console.log(!true); // false
console.log(!false); // true

// 중첩된 NOT 연산
console.log(!!true); // true (true의 반대의 반대)
console.log(!!false); // false (false의 반대의 반대)

// NOT 연산 예시: 값을 반대로 뒤집음
const x = true; // 예: 숙제를 다 했다

const result = !x;
console.log(result); // false (x가 true이므로 NOT 연산 결과는 false)
