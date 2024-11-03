// undefined 예제: 값이 할당되지 않은 상태
let cup; // 변수를 선언하지만 값을 할당하지 않음
console.log(cup); // undefined 출력

// 변수에 값을 할당
cup = "물";
console.log(cup); // "물" 출력

// null 예제: 의도적으로 값을 비움
cup = null; // 의도적으로 비어있음을 표현
console.log(cup); // null 출력

// null과 undefined 비교
console.log(null == undefined); // true (동등 비교, 값이 없다는 의미는 같음)
console.log(null === undefined); // false (일치 비교, 자료형이 다름)

// 잘못된 undefined 사용 예시
let value = undefined; // 권장하지 않음, undefined는 자바스크립트가 자동 할당함
let value2 = null; // 값이 없음을 명시적으로 표현할 때는 null을 사용
console.log(value2); // null 출력
