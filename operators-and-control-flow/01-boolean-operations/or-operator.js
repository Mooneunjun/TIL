// OR 연산 예시
console.log(10 < 15 || 8 < 5); // true (둘 중 하나가 true이므로 true)
console.log(10 > 15 || 8 < 5); // false (둘 다 false이므로 false)

// OR 연산 예시: 둘 중 하나라도 참이면 결과가 true
const x = false; // 예: 오늘은 비가 온다
const y = true; // 예: 오늘은 평일이다

const result = x || y;
console.log(result); // true (둘 중 하나만 참이어도 참)