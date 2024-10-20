// 변수 선언과 할당을 따로 하기
let cheeseBurgerPrice; // 변수 선언
cheeseBurgerPrice = 5500; // 값 할당

let friesPrice;
friesPrice = 2500;

let colaPrice;
colaPrice = 1800;

// 주문 1: 치즈버거 3개
console.log(cheeseBurgerPrice * 3); // 16500

// 변수 선언과 동시에 할당하기
let cheeseBurgerPriceNew = 5800; // 선언과 동시에 값 할당
let friesPriceNew = 2600;
let colaPriceNew = 2000;

// 주문 2: 치즈버거 3개, 감자튀김 1개, 콜라 2개
console.log(cheeseBurgerPriceNew * 3 + friesPriceNew * 1 + colaPriceNew * 2); // 21800

// 주문 3: 감자튀김 2개, 콜라 1개
console.log(friesPriceNew * 2 + colaPriceNew * 1); // 7200

// 변수 오타 예시
let friesPriceCorrect = 2500;

console.log(friesPriceCorrect * 2); // 감자튀김 2개 -> 정상 출력: 5000
console.log(friePrice * 2); // 오타 발생 -> ReferenceError: friPrice is not defined
