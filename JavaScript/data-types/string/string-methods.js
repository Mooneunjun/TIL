//------------------- 문자열의 길이: length -------------------
// 문자열의 길이를 반환 (공백 포함)
const str = "JavaScript Rocks!";
console.log(str.length); // 출력: 19

//------------------- 문자 접근: 대괄호 표기법과 charAt -------------------
const greeting = "Hello, World!";

// 대괄호 표기법
console.log(greeting[7]); // 출력: W

// charAt 메서드
console.log(greeting.charAt(7)); // 출력: W

// 주의: 문자열은 불변이므로 개별 문자 수정 불가
greeting[0] = "h"; // 동작하지 않음
console.log(greeting[0]); // 출력: H

//------------------- 특정 문자 찾기: indexOf와 lastIndexOf -------------------
const text = "abracadabra";

// 첫 번째 위치 찾기
console.log(text.indexOf("a")); // 출력: 0

// 마지막 위치 찾기
console.log(text.lastIndexOf("a")); // 출력: 10

// 없는 문자를 찾으면 -1 반환
console.log(text.indexOf("z")); // 출력: -1

//------------------- 대소문자 변환: toUpperCase와 toLowerCase -------------------
const mixedCase = "JaVaScRiPt";

// 대문자로 변환
console.log(mixedCase.toUpperCase()); // 출력: JAVASCRIPT

// 소문자로 변환
console.log(mixedCase.toLowerCase()); // 출력: javascript

//------------------- 공백 제거: trim -------------------
const padded = "   Learn JavaScript   ";

// 공백 제거
console.log(padded.trim()); // 출력: "Learn JavaScript"

// 내부 공백은 그대로 유지
console.log("   L e a r n   ".trim()); // 출력: "L e a r n"

//------------------- 부분 문자열 추출: slice -------------------
const phrase = "Frontend Development";

// 0번 인덱스부터 8번 인덱스 직전까지 추출
console.log(phrase.slice(0, 8)); // 출력: Frontend

// 시작 인덱스만 전달하면 끝까지 추출
console.log(phrase.slice(9)); // 출력: Development

// 인덱스를 생략하면 전체 문자열 반환
console.log(phrase.slice()); // 출력: Frontend Development
