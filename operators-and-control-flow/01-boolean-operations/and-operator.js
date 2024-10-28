// AND 연산 예시
console.log(10 > 5 && 8 > 3); // true (두 조건이 모두 true)
console.log(10 > 5 && 8 < 3); // false (둘 중 하나가 false이므로 false)

// AND 연산 예시: 두 값이 모두 참일 때만 결과가 true
const x = true; // 예: 오늘 날씨가 맑다
const y = false; // 예: 오늘은 주말이다

const result = x && y;
console.log(result); // false (둘 중 하나가 false이므로)
