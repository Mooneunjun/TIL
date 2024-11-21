// switch와 if문을 비교하는 예제 코드

// 상황 설명: 한 사용자가 좋아하는 색상을 선택했습니다.
// 숫자에 따라 서로 다른 색상 이름을 출력합니다.

let userChoice = 3; // 1: 빨강, 2: 파랑, 3: 노랑, 4: 초록

// switch 문 사용
switch (userChoice) {
  case 1:
    console.log("빨강을 선택한 당신, 열정적이군요!");
    break;
  case 2:
    console.log("파랑을 선택한 당신, 차분한 성격이네요.");
    break;
  case 3:
    console.log("노랑을 선택한 당신, 밝고 쾌활하군요!");
    break;
  case 4:
    console.log("초록을 선택한 당신, 자연을 사랑하는군요.");
    break;
  default:
    console.log("1에서 4 사이의 숫자를 선택해 주세요.");
}

// 동일한 로직을 if 문으로 구현
if (userChoice === 1) {
  console.log("빨강을 선택한 당신, 열정적이군요!");
} else if (userChoice === 2) {
  console.log("파랑을 선택한 당신, 차분한 성격이네요.");
} else if (userChoice === 3) {
  console.log("노랑을 선택한 당신, 밝고 쾌활하군요!");
} else if (userChoice === 4) {
  console.log("초록을 선택한 당신, 자연을 사랑하는군요.");
} else {
  console.log("1에서 4 사이의 숫자를 선택해 주세요.");
}

// 자료형 엄격성 확인: userChoice가 문자열일 때의 switch와 if 비교
userChoice = "3";

// switch 문 (자료형이 일치하지 않아 default가 실행됨)
switch (userChoice) {
  case 1:
    console.log("빨강을 선택한 당신, 열정적이군요!");
    break;
  case 2:
    console.log("파랑을 선택한 당신, 차분한 성격이네요.");
    break;
  case 3:
    console.log("노랑을 선택한 당신, 밝고 쾌활하군요!");
    break;
  case 4:
    console.log("초록을 선택한 당신, 자연을 사랑하는군요.");
    break;
  default:
    console.log("1에서 4 사이의 숫자를 선택해 주세요.");
}

// if 문 (동등 비교로 실행 가능)
if (userChoice == 1) {
  console.log("빨강을 선택한 당신, 열정적이군요!");
} else if (userChoice == 2) {
  console.log("파랑을 선택한 당신, 차분한 성격이네요.");
} else if (userChoice == 3) {
  console.log("노랑을 선택한 당신, 밝고 쾌활하군요!");
} else if (userChoice == 4) {
  console.log("초록을 선택한 당신, 자연을 사랑하는군요.");
} else {
  console.log("1에서 4 사이의 숫자를 선택해 주세요.");
}

// if문에서는 ==을 사용하여 자료형 자동 변환이 가능하여 문자열 '3'도 일치합니다.
// switch문에서는 자료형 엄격한 비교로 인해 '3'과 3은 다르게 처리됩니다.
