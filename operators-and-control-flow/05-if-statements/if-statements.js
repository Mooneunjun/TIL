// 온도에 따라 물의 상태를 출력하는 조건문 예시

let temperature = -5; // 온도 변수

// 기본 if 문
if (temperature <= 0) {
  console.log("물이 얼었습니다.");
}

// if-else 문
temperature = 15;
if (temperature <= 0) {
  console.log("물이 얼었습니다.");
} else {
  console.log("물이 얼지 않았습니다.");
}

// 중첩 if 문을 활용한 상태 확인
temperature = 105;
if (temperature <= 0) {
  console.log("물이 얼었습니다.");
} else {
  if (temperature >= 100) {
    console.log("물이 끓고 있습니다.");
  } else {
    console.log("물이 얼지도 끓지도 않습니다.");
  }
}

// else if 문으로 간결하게 여러 조건 처리
temperature = 140;
if (temperature <= 0) {
  console.log("물이 얼었습니다.");
} else if (temperature < 100) {
  console.log("물이 얼지도 끓지도 않습니다.");
} else if (temperature < 150) {
  console.log("물이 끓고 있습니다.");
} else {
  console.log("물이 증기로 변했습니다.");
}
