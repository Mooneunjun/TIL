switch (비교값) {
  case 조건값1:
    // 조건값1이 비교값과 일치할 때 실행할 코드
    break;
  case 조건값2:
    // 조건값2가 비교값과 일치할 때 실행할 코드
    break;
  default:
  // 비교값이 모든 조건값과 일치하지 않을 때 실행할 코드
}

// 선택한 동물에 따라 다른 메시지를 출력하는 스위치문 예제
let choice = 2; // 여기서는 고양이를 선택했다고 가정

// 스위치문을 사용해 선택한 동물에 따라 결과 출력
switch (choice) {
  case 1:
    console.log("강아지를 선택한 당신, 따뜻하고 충직한 성격을 지녔군요.");
    break;
  case 2:
    console.log(
      "고양이를 선택한 당신, 겉은 냉정해 보이지만 속은 따뜻한 사람입니다."
    );
    break;
  case 3:
    console.log("코알라를 선택한 당신, 느긋하고 여유로운 성격을 지녔네요.");
    break;
  case 4:
    console.log("앵무새를 선택한 당신, 활발하고 사교적인 성격입니다.");
    break;
  default:
    console.log("알 수 없는 선택입니다. 다시 선택해 주세요.");
}

// `break` 문 없이 실행할 경우
choice = 2;

switch (choice) {
  case 1:
    console.log("강아지를 선택한 당신, 따뜻하고 충직한 성격을 지녔군요.");
  case 2:
    console.log(
      "고양이를 선택한 당신, 겉은 냉정해 보이지만 속은 따뜻한 사람입니다."
    );
  case 3:
    console.log("코알라를 선택한 당신, 느긋하고 여유로운 성격을 지녔네요.");
  case 4:
    console.log("앵무새를 선택한 당신, 활발하고 사교적인 성격입니다.");
  default:
    console.log("알 수 없는 선택입니다. 다시 선택해 주세요.");
}
