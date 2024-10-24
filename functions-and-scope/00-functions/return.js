// get7 함수 선언
function get7() {
  // return: 함수가 실행된 후, 값 7을 return(돌려줌)
  // return된 값은 함수 호출한 자리로 전달됨
  return 7;
}

// get7() 함수 호출: 함수가 호출되면 return값 7이 반환되고,
// 이 값은 console.log에 전달되어 출력됨
console.log(get7()); // 출력: 7

// getTwice 함수: 입력된 숫자의 두 배를 return함
function getTwice(number) {
  return number * 2; // 입력된 값 * 2를 return
}

// 함수 호출: 5를 전달하면 10이 return되고 출력됨
console.log(getTwice(5)); // 출력: 10

let x = getTwice(5); // x에는 10이 저장됨
let y = getTwice(2); // y에는 4가 저장됨

console.log(x * y); // 출력: 40
