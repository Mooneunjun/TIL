// 반복문 제어 예제 코드 (break-continue.js)

// 1부터 10까지 출력하는 while 문
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// break를 사용해 1부터 5까지만 출력하는 while 문
i = 1;
while (i <= 10) {
  console.log(i);
  if (i === 5) break; // i가 5일 때 반복문 종료
  i++;
}

// for 문에서 break를 사용해 1부터 5까지만 출력
for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i === 5) break; // i가 5일 때 반복문 종료
}

// 1부터 10까지 홀수만 출력하는 for 문
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue; // i가 짝수면 이후 코드를 건너뛰고 다음 반복으로
  console.log(i); // 홀수일 때만 출력
}

// while 문에서 continue를 사용해 1부터 10까지 홀수만 출력
i = 1;
while (i <= 10) {
  if (i % 2 === 0) {
    i++; // 조건에 맞으면 i를 증가시키고 다음 반복으로 넘어감
    continue;
  }
  console.log(i);
  i++;
}
