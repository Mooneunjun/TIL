// 실습 1: 주식 수익을 계산해주는 함수
function stockProfitCalculator(buyPrice, sellPrice, numberOfShares) {
  // 매도 금액에서 매수 금액을 뺀 후, 보유 주식 수를 곱해 총 수익을 리턴
  return (sellPrice - buyPrice) * numberOfShares;
}

// 주식을 매수한 금액, 매도한 금액, 보유 주식 수 설정
let buyPrice = 50000; // 주식을 매수한 금액 (1주당)
let sellPrice = 60000; // 주식을 매도한 금액 (1주당)
let numberOfShares = 10; // 보유 주식 수

// stockProfitCalculator 함수 호출하여 총 수익 계산
let totalProfit = stockProfitCalculator(buyPrice, sellPrice, numberOfShares);

// 총 수익을 출력
console.log("총 수익은 " + totalProfit + "원 입니다.");

// 실습 2: 세금을 고려한 최종 수익 계산 함수
function finalProfitCalculator(buyPrice, sellPrice, numberOfShares, taxRate) {
  // 먼저 주식 수익을 계산
  let totalProfit = stockProfitCalculator(buyPrice, sellPrice, numberOfShares);
  // 세금 계산
  let taxAmount = (totalProfit * taxRate) / 100;
  // 최종 수익은 세금을 뺀 나머지 금액
  return totalProfit - taxAmount;
}

// 세율 설정
let taxRate = 15; // 세율 15%

// finalProfitCalculator 함수 호출하여 최종 수익 계산
let finalProfit = finalProfitCalculator(
  buyPrice,
  sellPrice,
  numberOfShares,
  taxRate
);

// 세율과 최종 수익을 출력
console.log("세율은 " + taxRate + "% 입니다.");
console.log("최종 수익은 " + finalProfit + "원 입니다.");
