// 일반적인 문자열 연결 방식 예제
const name = "Alice";
const age = 25;
console.log("안녕하세요, 저는 " + name + "이고, 나이는 " + age + "살입니다.");

// 템플릿 문자열을 이용한 문자열 연결 예제
console.log(`안녕하세요, 저는 ${name}이고, 나이는 ${age}살입니다.`);

// 템플릿 문자열과 함수 호출 예제
const number = 3;
function getTwice(x) {
  return x * 2;
}
console.log(`숫자 ${number}의 두 배는 ${getTwice(number)}입니다.`);

// 상품 정보와 계산된 결제 금액을 템플릿 문자열로 출력 예제
const item = "apple";
const price = 1000;
const quantity = 5;
console.log(
  `주문하신 상품은 ${item}이고, 총 금액은 ${price * quantity}원입니다.`
);
