// 세미콜론을 사용한 경우
let message = "Hello, World!";
console.log(message);

// 세미콜론 없이도 작동하지만, 오류가 발생할 수 있는 상황 예시
let anotherMessage = "This works without semicolon";
console.log(anotherMessage); // 이 줄은 ASI(자동 세미콜론 삽입)로 처리된다.

// 오류 예시 - 두 문장을 한 줄에 작성했을 때 (주석 처리함 - 실행 시 오류 발생)
// let testMessage = "This will cause an error" console.log(testMessage) // SyntaxError 발생
// 콘솔 출력 결과 :  Uncaught SyntaxError: Unexpected identifier 'console' (at script.js:11:46)
